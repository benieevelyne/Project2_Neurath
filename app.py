import pandas as pd
import numpy as np
import os

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect, distinct

from flask import(
    Flask,
    render_template,
    jsonify,
    json
)
# immport
from flask_pymongo import PyMongo
from bson.json_util import dumps
# from config import  MONGOPASS


MONGOPASS = os.environ.get('MONGOPASS')
API_TOKEN = os.environ.get('API_TOKEN')

# Database Setup
app = Flask(__name__)
app.config['MONGO_URI'] = "mongodb://traffickAdmin:"+ MONGOPASS + "@traffickcluster-shard-00-00-xeuqd.mongodb.net:27017,traffickcluster-shard-00-01-xeuqd.mongodb.net:27017,traffickcluster-shard-00-02-xeuqd.mongodb.net:27017/Neurath?ssl=true&replicaSet=TraffickCluster-shard-0&authSource=admin&retryWrites=true"
# app.config['MONGO_URI'] = "mongodb://traffickAdmin:MONGOPASS@traffickcluster-shard-00-00-xeuqd.mongodb.net:27017,traffickcluster-shard-00-01-xeuqd.mongodb.net:27017,traffickcluster-shard-00-02-xeuqd.mongodb.net:27017/Neurath?ssl=true&replicaSet=TraffickCluster-shard-0&authSource=admin&retryWrites=true"
mongo = PyMongo(app)



@app.route('/fetch_country')
def fetch_country():
    # get possible country name values
    country_list = []
    response = mongo.db.Migration_Counts.distinct('Destination')
    # response = session.query(distinct(migration_age_group.countries_of_destination)).order_by(migration_age_group.countries_of_destination).all()
    for country in response:
        country_list.append(country)
    # return response object
    return jsonify(country_list)





## create route to return globe data by year
@app.route('/fetch_year/<year>')
def fetch_year(year):
    geojson = {     'type':'FeatureCollection', 'features':[]}
    response = mongo.db.Trafficking_GeoData.find({'properties.Year': int(year)})
    for feature in response:
       geojson['features'].append(feature)
    return dumps(geojson)


@app.route('/nodata')
def fetch_nodata():
    geojson = {'type':'FeatureCollection', 'features':[]}
    response = mongo.db.Trafficking_GeoData.find({'properties.TraffickingStats': 'None'})
    for feature in response:
       geojson['features'].append(feature)
    return dumps(geojson)



@app.route("/api/data/<country>") #Designate what the placeholder is // Below designate where the placeholder is
def list_migration(country):

    response = mongo.db.Migration_Counts.find({'Destination': country})
    countries = []
    for result in response:
        countries.append({
        "years": result['Year'],
        "TotalYouth": result['TotalYouth'],
        "TotalAdult": result['TotalAdult'],
        "TotalElder": result['TotalElder'],
        "countries_of_destination": result['Destination'],
    })

    return jsonify(countries)



@app.route("/SuperSecretKey")
def secretKey():
    return jsonify(API_TOKEN)

# create route that renders index.html template
@app.route("/")
def home():      
    return render_template("index.html")

if __name__ == "__main__":
    app.run()

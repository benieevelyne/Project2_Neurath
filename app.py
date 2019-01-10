import pandas as pd
import numpy as np

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect, distinct

from flask import(
    Flask,
    render_template,
    jsonify
)
from flask_pymongo import PyMongo
# from config import  MONGOPASS

# Database Setup
engine = create_engine("sqlite:///db/Migrationdb.sqlite?check_same_thread=False")

# reflect existing database into new model
Base = automap_base()

# reflect tables
Base.prepare(engine, reflect=True)

# save reference to tables
migration = Base.classes.migration
migration_age_group = Base.classes.migration_age_group
trafficking_age_group = Base.classes.trafficking_age_group
population = Base.classes.population
gdp = Base.classes.gdp

# create session to query tables
session = Session(engine)

# create inspector to get column names
#inspector = inspect(engine)
# Collect the names of tables within the database
# print(inspector.get_table_names())

# Using the inspector to print the column names within the 'migration' table and its types
#columns = inspector.get_columns('migration')
# for column in columns:
#    print(column["name"], column["type"])

app = Flask(__name__)


app.config['MONGO_URI'] = "mongodb://traffickAdmin:"+ MONGOPASS + "@traffickcluster-shard-00-00-xeuqd.mongodb.net:27017,traffickcluster-shard-00-01-xeuqd.mongodb.net:27017,traffickcluster-shard-00-02-xeuqd.mongodb.net:27017/TraffickDB?ssl=true&replicaSet=TraffickCluster-shard-0&authSource=admin&retryWrites=true"
mongo = PyMongo(app)

# create route to return possible gender options for select menu


@app.route('/fetch_country')
def fetch_country():
    # get possible country name values
    country_list = []
    response = session.query(distinct(migration_age_group.countries_of_destination)).order_by(migration_age_group.countries_of_destination).all()
    for country in response:
        temp, = country
        country_list.append(temp)

    # return response object
    return jsonify(country_list)


## create route to return globe data by year
@app.route('/fetch_year/<year>')
def fetch_year(year):
    geojson = {'type':'FeatureCollection', 'features':[]}
    response = mongo.db.trafficking.find({'properties.Year': int(year)})
    print(response)
    for feature in response:
        print('country found')
        geojson['features'].append(feature)
    # geojson = mongo.db.trafficking.find_one()
    # print(geojson)
    # return response object
    return jsonify(geojson)

# # create route to return data for charts

# #Evelyne - Create stacked bar 
# @app.route('/stacked_bar_chart/<country>')
# def stacked_bar_chart(country):
#     # filter by country
#     print(country)
#     return 'page is working!'
# #    queries = []
# #    if country != 'All Countries':
# #        queries.append(migration_age_group.countries_of_destination == country)
# #        




# @app.route("/api/data")
# def list_pets():
#     results = db.session.query(Pet.nickname, Pet.age).all()

#     pets = []
#     for result in results:
#         pets.append({
#             "nickname": result[0],
#             "age": result[1]
#         })
#     return jsonify(pets)


# @app.route("/")
# def home():
    
#     return "Welcome!"


# if __name__ == "__main__":
#     app.run()

@app.route("/api/data/<country>") #Designate what the placeholder is // Below designate where the placeholder is
def list_migration(country):
    results = session \
        .query(
            migration_age_group.years, 
            migration_age_group.TotalYouth, 
            migration_age_group.TotalAdult, 
            migration_age_group.TotalElder, 
            migration_age_group.countries_of_destination) \
        .filter(migration_age_group.countries_of_destination == country) \
        .all()
    countries = []
    for result in results:
        countries.append({
            "years": result[0],
            "TotalYouth": result[1],
            "TotalAdult": result[2],
            "TotalElder": result[3],
            "countries_of_destination": result[4],
        })
    return jsonify(countries)

# create route that renders index.html template
@app.route("/")
def home():

      
    return render_template("index.html")


if __name__ == "__main__":
    app.run()

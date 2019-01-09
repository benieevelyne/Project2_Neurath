import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt
from flask import Flask, jsonify, render_template
import os
import pandas as pd
from flask_sqlalchemy import SQLAlchemy



#################################################
# Database Setup
#################################################
# engine = create_engine("sqlite:///mybackup.db")
engine = create_engine("sqlite:///db/mybackup.db")

# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite"

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

Dbtest1 = Base.classes.dbtest1

# Create our session (link) from Python to the DB
session = Session(engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


# @app.route("/api/v1.0/countries")
@app.route("/countries")
def countries():
    """Return a list of passenger data including the name, age, and sex of each passenger"""
    # Query all passengers
    results = session.query(Dbtest1).all()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_countries = []
    for dbtest1 in results:
        country_dict = {}
        country_dict["Year"] = dbtest1.Year
        country_dict["CountryOfExploitation"] = dbtest1.CountryOfExploitation
        country_dict["gender"] = dbtest1.gender
        country_dict["ageBroad"] = dbtest1.ageBroad
        country_dict["Count"] = dbtest1.Count
        all_countries.append(country_dict)

    return jsonify(all_countries)



if __name__ == '__main__':
    app.run(debug=True)
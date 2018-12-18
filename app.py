import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template, url_for, json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db/PLACEHOLDER.sqlite"
# db = SQLAlchemy(app)

# # reflect an existing database into a new model
# Base = automap_base()
# # reflect the tables
# Base.prepare(db.engine, reflect=True)

# # Save references to each table
# PLACEHOLDER = Base.classes.PLACEHOLDER
# PLACEHOLDER = Base.classes.PLACEHOLDER


#################################################
# Route Setup
#################################################


@app.route("/")
def index():

    ##TODO RETURN GLOBAL DATA##
    """Return the homepage."""
    return render_template("/index.html")



@app.route("/counties")
def countries():
    """Return a list of countries."""

    # Use Pandas to perform the sql query
    BLAHBLAH = db.session.query(countries).BLAHBLAH
    df = pd.read_sql_query(BLAHBLAH, db.session.bind)

    # Return a list of the column names (Country names)
    return jsonify(list(df.columns)[X:])



###################TO#DO#########################
#Return JSON data of Migration Stats
##Return JSON data of Trafficking Stats
##Return JSON data of Country Stats##
#################################################

if __name__ == "__main__":
    app.run()   


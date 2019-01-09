# Winter Has Come

## Purpose
This dashboard contains various plots showing performance of different countries in the Winter Olympics. 

The original data was obtained from data.world: https://data.world/makeovermonday/2018w7-the-winter-olympics and from the world bank development indicatiors database: http://databank.worldbank.org/data/reports.aspx?source=2&series=SP.POP.TOTL#.

Each plot has drop down lists above it so the user can find different trends within the dataset. The following filters are used throughout the dataset: gender, sport, country, medal type, and year the olympics took place. The following plots were included: a stacked bar chart showing total numbers of gold, silver and bronze medals won; a line plot showing a comparison of cumulative medals won over time by two selected countries; two pie charts showing the percentage of medals won in each sport by those two specified countries; a scatter plot showing the relationship between medals won and the following demographic values for each country: population, GDP, and mean temperature. This dashboard also has a map showing the location of each host city and how a countries performance was impacted by hosting the games.

## Development
app.py is a flask app that returns jsonified queries from a sqlite database. The sqlite database contains information on each medal won in the Winter Olympics from 1924 to 2014 and on the population, GDP, and mean temperature of various countries from 1960-2014. We queried the database using SQLAlchemy and return jsonified dictionaries to javascript to build our plots.

Our index.html page was built using a bootstrap theme from: https://startbootstrap.com/template-overviews/freelancer/

dashboard.html uses the jsonified objects from our python app to build our plots using plotly.js and our map using leaflet.js.

## Requirements
This notebook requires python to be installed. Python 3.6.2 was used during development. As mentioned above SQLAlchemy was used to query the databases in python. Flask was used to host the app to return the data for the plots in json format. All required libraries can be found in requirements.txt and installed with the following command: 

`pip install requirements.txt -r`

## Running the Code
To run the flask app type the following into the command line: 

`python app.py`

Copy the local address listed into your browser and it will render the html page. Use the dropdown menu to switch between different subjects from the study.

## Link to App
https://floating-caverns-16659.herokuapp.com/

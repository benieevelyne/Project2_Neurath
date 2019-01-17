# Project2_Neurath


Link to app:
https://traffickingdashboard.herokuapp.com/ 


Running the code from app.py:
To run the flask app type the following into the command line:
python app.py
Copy the local address listed into your browser and it will render the html page. 



About and Project Goals:
We explored the migration dataset and human trafficking dataset worldwide in multiple years. Using an interactive dashboard, we visualize the migration data on a global scale based on their GDP and countries of origin. We also analyzed the migration data by sorting people by age group and sex. Finally, we determined if the proliferation of human trafficking is different among gender groups and age groups.
To visualize our findings, we used:
•	A stacked bar graph
•	Globe using Geojson
•	Isotype

In the dashboard, by default, the stacked bar plot displays the number of people that migrated to the United Stated of America since 1990, 1995, 2000, 2005, 2010, 2015 and 2017. The user can change the plot results by selecting a different country in the drop-down list above in the graph. 
We queried the database using SQLAlchemy and return jsonified dictionaries to javascript to build our plots.


Development
Our index.html page was built using a bootstrap theme from: https://startbootstrap.com/template-overviews/freelancer/ 
dashboard.js uses the jsonified objects from our python app to build our plot using plotly.js.
All required libraries can be found in requirements.txt and installed with the following command:
pip install requirements.txt -r


Specifications
•	Server: Python Flask powered RESTful API, 
•	Styling: HTML/CSS 
•	JavaScript: 
o	D3.js, ISOTYPE
o	 GeoJson: Globe?
•	Database: (MongoDB, SQLite)
•	Data Sources	
i.	Awareness Data
•	https://trends.google.com/trends/explore?date=all&geo=US&q=%2Fm%2F01qsv6
ii.	Trafficking Data
•	https://www.ctdatacollaborative.org/
iii.	Migration Data:
•	http://www.un.org/en/development/desa/population/migration/data/estimates2/estimates17.shtml





Serving Restful APIs via Flask 
Hosting Data on Mongo Atlas
Queries Via Flask-PyMongo



Used Cesium.JS to visuize human trafficking Data on a 3d globe.

    The Extruded Height of each ploygon shows the total trafficking cases for that country per year.
    The Color Represents the GDP (PPP), ranked from RED to Green
    When available, the arrows represent the number of cases where both the origin and destination were known. 
    You can toggle displaying polygons for countries with 0 reported cases of human trafficking, according to the dataset
    The Time Slider can be animated, using setInterval in inputs.js 


    Features Demonstrated: 
        Loading GeoJson
        Modifying entity values
        Displaying additional datasets with toggle
        Drawing polylines
        Degree to cartesian conversion
        Camera controls
        HTML overlay/custom butttons

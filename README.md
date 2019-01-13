# Project2_Neurath


https://traffickingdashboard.herokuapp.com/



data sources: 
https://www.ctdatacollaborative.org/
http://www.un.org/en/development/desa/population/migration/data/estimates2/estimates17.shtml




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
# leaflet-challenge

In this Challenge, data from the United States Geological Survey (USGS) was used to develop a tool to help visualize earthquakes and display them in a meaningful way. 
For this specific tool, all earthquake data over the past 7 days was used (URL = https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson) along with Leaflet to create a map that plots all the earthquakes from the dataset. The latitude 
and longitude provided were used to plot the earthquakes, the magnitude was used to determine the size of the markers, and the depth in kilometers was used to determine the color of the markers. A popup was added to each marker to provide 
additional information about the earthquake including magnitude, location, and depth. 

The code for the map can be found in logic.js file in the static/js folder. 
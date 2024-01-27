let myMap = L.map("map", {
    center: [37.09, -95.71], 
    zoom: 4
});

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);



//  Set the API URL  
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Define the getColor function
function getColor(depth) {
    if  (depth > 90) return '#800026';
    else if (depth > 70) return '#BD0026';
    else if (depth > 50) return '#E31A1C';
    else if (depth > 30) return '#FC4E2A';
    else if (depth > 10) return '#FD8D3C';
    else if (depth > -10) return '#FEB24C';
    else return '#FFEDA0';
  }
  
// Fetch the data with d3
d3.json(url).then(function(response){

    console.log(response);

    //Loop through the data features
    response.features.forEach(function(feature){
        let coords = feature.geometry.coordinates;
        let latlng = [coords[1], coords[0]];
        let magnitude = feature.properties.mag;
        let depth = coords[2];
        let location = feature.properties.place;

        // Create a marker
        let marker = L.circleMarker(latlng, {

            radius: magnitude * 5,
            fillColor: getColor(depth), 
            fillOpacity: 0.75,
            weight:1             

            });
        
        // Bind a popup to the marker
        marker.bindPopup("<h3>Magnitude: " + magnitude + "</h3><h3>Location: " + location + "</h3><h3>Depth: " + depth + " km" + "</h3>")

        // Add the marker to the map
        marker.addTo(myMap);
        });

    // Create a legend
    let legend = L.control({position: "bottomright"});

    legend.onAdd = function() {
        let div = L.DomUtil.create("div", "info legend");
        let grades = [-10, 10, 30, 50, 70, 90];
        

        // Looping through the intervals 

        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
        '<div style="background:' + getColor(grades[i] + 1) + '; width:10px; height:10px; display:inline-block; margin-right:8px;"></div>' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
            }

        return div;
        };

        // Add the legent to the map
        legend.addTo(myMap);


        
        })
    

 


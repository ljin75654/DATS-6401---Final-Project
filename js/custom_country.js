//Width and height of map
var width = 960;
var height = 500;

// D3 Projection
var projection = d3.geo.meractor()
					.center([0, 5 ])
					.scale(900)
					.rotate([-180,0]);
        
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var path = d3.geo.path()
    .projection(projection);

var g = svg.append("g");

d3.csv("country.csv", function(data) {
color("#30c514");

// load and display the World
d3.json("json/world-110m2.json", function(error, topology) {
    g.selectAll("path")
      .data(topojson.object(topology, topology.objects.countries)
          .geometries)
    .enter()
      .append("path")
      .attr("d", path)
});
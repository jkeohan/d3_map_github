var width = 800;
var height = 375;
var map = void 0; // Update global

//var color = d3.scale.category20c()
var color = d3.scale.ordinal()
  .domain(["Full","Partial: CMT 1","Partial: CMT 2","Partial: Training 1", "Partial: Training 2", "Zero"])
  .range(["green","blue","steelblue","orange","yellow","red"])

var projection = d3.geo.mercator()
    .center([20, 5])
    .rotate([4.4, 0])
    //.parallels([50, 60])
    .scale(100)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(".worldmap").append("svg")
    .attr("width", width)
    .attr("height", height)

d3.json("world.json", function(error, world) {
  svg.selectAll(".subunit")
      .data(topojson.feature(world, world.objects.subunits).features)
    .enter().append("path")
      .attr("class", function(d) { return "subunit " + d.id; })
      .attr("d", path)
        .style({
          stroke:"white",
          "stroke-width": 0.75,
          fill: "lightgrey"
          })
});



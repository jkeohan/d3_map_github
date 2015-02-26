var width = 800;
var height = 375;
var map = void 0; // Update global
//var url = "http://localhost:8082/world.json"
var url = "http://github.com/jkeohan/d3_map_github/blob/master/Demo/world.json"
//var url = "gh/get/response.jsonjkeohan/d3_map_github/blob/master/Demo/"


// //http://jsfiddle.net/gh/get/D3/3.0.4/jkeohan/d3_map_github/tree/master/Demo
// window.addEvent('domready', function() {
//   new Request.HTML({
//     url: '/gh/get/response.json/zalun/jsFiddleGithubDemo/tree/master/Demo/',
//     data: {'delay': 1},
//     method: 'post',
//     update: 'demo',
//     onSuccess: function(response) {
//       $('demo').highlight();
//     }
//   }).send();
// })

// var map = {}

// $.ajax({
//   type: "GET",
//   url: url,
//   crossDomain: true,
//   //async: false,
//   contentType: "application/json",
//   dataType: 'json',
//   success: function (data) { 
//     alert('success');
//     console.log(data);
//     map = data;
//   },
//   error: function(e) { 
//     alert('error');
//     console.log(e);
//   }
// })

var request = new XMLHttpRequest
request.open('GET', url )
var info = JSON.parse(resuest.responseText)
console.log(info)

// var getJSON = function(url) { 
// return new Promise(function(resolve,reject) {
//  var xhr = new XMLHttpRequest()
//  xhr.open('get', url, true)
// xhr.responseType = 'json'
// xhr.onload = function () {
//   var status = xhr.status
//   if(status == 200) { resolve(xhr.response)}
//   else { reject(status)}
//   }
//   xhr.send()
//   })
// }


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

d3.json(map, function(error, world) {
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



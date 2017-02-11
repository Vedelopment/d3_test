

console.log("I am alive.");
var dataset = [];                        //Initialize empty array

$.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02')
  .then(function(success){
    // dataset = success
    //             .features
    success.features.forEach(function(elem) {
      dataset.push(Math.floor(elem.properties.mag+1));

    })

    viz(dataset);
  })
  .catch(function(error){
    console.error(error);
  })
  .always(function(andForever) {
    console.log("I am a turtle");
  })
    console.log(d3.select('body'));
    var viz = function(dataset){
      d3.select("body").selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function(d) {
            var barHeight = d * 5;  //Scale up by factor of 5
            return barHeight + "px";
      });
    }

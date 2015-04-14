app.directive('lineChart', function() {
  var data  = [188.0, 187.4, 187.6, 187.2, 186.8, 180, 175, 195, 150, 199];
  function link(scope, el) {
      var m = [80, 80, 80, 80];

      var el    = el[0],
        width   = el.clientWidth,
        height  = el.clientHeight,
        svg     = d3.select(el).append('svg:svg'),
        x       = d3.scale.linear().domain([1, data.length]).range([0, width]),
        y       = d3.scale.linear().domain([100, d3.max(data) + d3.max(data) * .1]).range([height, 0]);

      var line = d3.svg.line()
          .x(function(d, i) {
            return x(i);
          })
          .y(function(d) {
            return y(d);
          });

      svg.attr("width", width + m[1] + m[3])
          .attr("height", height + m[0] + m[2])
          .append("svg:g")
          .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

      var xAxis = d3.svg.axis().scale(x).tickSize(-height).tickSubdivide(true);

      svg.append('svg:g')
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)

      var yAxisLeft = d3.svg.axis().orient('left').scale(y).ticks(4).orient("left");

      svg.append('svg:g')
          .attr("class", "y axis")
          .attr("transform", "translate(0,0)")
          .call(yAxisLeft)

      svg.append("svg:path").attr("d", line(data)); 
  }

  return {
    link: link
  }
})
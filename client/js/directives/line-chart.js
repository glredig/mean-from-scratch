app.directive('lineChart', function() {
  function link(scope, el, attrs) {
      data = attrs.chartData.split(',').map(function(num) {
        return parseInt(num, 10);
      });
      console.log("Scope: ",data);
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
          .attr("transform", "translate(30,30)");

      var xAxis = d3.svg.axis().scale(x).tickSize(-height).tickSubdivide(true);

      svg.append('svg:g')
          .attr("class", "x axis")
          .attr("transform", "translate(30," + height + ")")
          .call(xAxis)

      var yAxisLeft = d3.svg.axis().orient('left').scale(y).ticks(4).orient("left");

      svg.append('svg:g')
          .attr("class", "y axis")
          .attr("transform", "translate(30,0)")
          .call(yAxisLeft)

      svg.append("svg:path").attr("d", line(data)); 
  }

  return {
    restrict: 'EA',
    link: link
  }
})
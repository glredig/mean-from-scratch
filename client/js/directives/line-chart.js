app.directive('lineChart', function() {
  var data = [188.2, 188.6, 187.6, 187.4];
  function link(scope, el) {
    d3.select(el[0]).append('svg');
  }

  return {
    link: link
  }
})
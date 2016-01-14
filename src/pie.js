
var defaults = {

  width  : 500,
  height : 500,
  data   : [23,16,8,4,2,1],
  colors : ['#5da5da','#faa43a','#60bd68','#b2912f','#b276b2','#decf3f'],
  center : 0,
  margin : 10,
  stroke : '#000'

};





function drawInto(d3, window, opts) {

    var width  = opts.width  || defaults.width,
        height = opts.height || defaults.height,
        data   = opts.data   || defaults.data,
        colors = opts.colors || defaults.colors,
        center = opts.center || defaults.center,
        margin = opts.margin || defaults.margin,
        stroke = opts.stroke || defaults.stroke;

    var radius = width / 2;

    var arc    = d3.svg.arc()
                   .outerRadius( radius - margin )
                   .innerRadius( center );

    //do yr normal d3 stuff
    var svg = window.d3.select('body')
        .append('div').attr('class','container') //make a container div to ease the saving process
        .append('svg')
            .attr({
                xmlns  : 'http://www.w3.org/2000/svg',
                width  : width,
                height : height
            })
        .append('g')
            .attr('transform', 'translate(' + radius.toString() + ',' + radius.toString() + ')');

    svg.selectAll('.arc')
        .data( d3.layout.pie()(data) )
            .enter()
        .append('path')
            .attr({
                'class' : 'arc',
                'd'     : arc,
                'fill'  : function(d,i) { return colors[i]; },
                'stroke': stroke
            });

    return window.d3.select('.container').html();

}





module.exports = {

  defaults : defaults,
  drawInto : drawInto

};

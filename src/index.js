
'use strict';

var fs      = require('fs'),
    charter = require('./charter.js');

var chart = {
    data: [1,2,4]
};






charter(chart, function(res) { console.log(res); });

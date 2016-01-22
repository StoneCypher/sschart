
'use strict';

var fs    = require('fs'),
    d3    = require('d3'),
    jsdom = require('jsdom'),

    pie   = require('./pie.js');



module.exports = function(opts, callback) {

    var kinds = { 'pie': pie },
        kind  = kinds[opts.kind] || pie;  // todo: should the default be an error instead?

  jsdom.env({

    html     : '',
    features : { QuerySelector:true },

    done: function(errors, window) {

      window.d3 = d3.select(window.document); // get d3 into the dom

      callback(
        kind.drawInto(d3, window, { data: opts.data || kind.defaults.data })
      );

    }

  });

}

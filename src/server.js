
'use strict';

var express = require('express'),
    server  = express(),

    charter = require('./charter.js');

server.get('/',      (req,res) => res.send('no root document'));
server.get('/chart', (req,res) => charter({data:JSON.parse(req.query.data)}, function(svg) { res.send(svg); }) );

server.listen(7895, () => console.log('listening'));

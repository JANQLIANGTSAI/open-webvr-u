/**
 * 
 * expresspugbootstrap
 * -----------------------------------------------
 * An Node.JS template with 
 *   — Express
 *   — Pug (formerly Jade) 
 *   — Bootstrap (pug-bootstrap)
 *
 * https://github.com/JANQLIANGTSAI/expresspugbootstrap
 * Copyright 2016-present, Max J. Tsai
 * All rights reserved.
 * -----------------------------------------------
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/** Express **/
var express = require('express');

/** Core **/
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multer  = require('multer');

/** optionals **/
var favicon = require('serve-favicon');

/** -------------- INIT ------------------ **/

var app = express();

/** -------------------------------------- **/

/** settings **/
// port
app.set('port', 8080);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/** favicon **/
app.use(favicon(__dirname + '/public/favicon.ico'));

/** Static Pages  **/
app.use(express.static(path.join(__dirname, 'public')));

/** view engine **/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// mapping css folder
app.use('/css/pug-bootstrap', express.static(path.join(__dirname, 'node_modules/pug-bootstrap/css')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap')));

// mapping aframe folder
app.use('/aframe', express.static(path.join(__dirname, 'node_modules/aframe/dist')));
app.use('/kframe', express.static(path.join(__dirname, 'node_modules/kframe/dist')));

/** cookies **/
app.use(cookieParser());

/** body parsing **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// for multipart:  var upload = multer();

/** -------------------------------------- **/

app.get('/hello', function (req, res) {
   res.send('Hello World');
})

/** routing **/
var indexRoute = require('./routes/index');
app.use('/', indexRoute);

var server = app.listen(app.get('port'), function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log(`Express Server listening at http://${host}:${port}`);
})
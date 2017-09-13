// js/index.js
require('babel-polyfill');


var React = require('react');
var ReactDOM = require('react-dom');

var ListBoard = require('./components/list-board');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<ListBoard />, document.getElementById('app'));
});
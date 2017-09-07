// js/index.js
require('babel-polyfill');


var React = require('react');
var ReactDOM = require('react-dom');

var CardList = require('./components/list-board');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<CardList />, document.getElementById('app'));
});
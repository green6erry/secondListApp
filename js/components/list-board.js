// js/components/list-board.js
var React = require('react');
var CardListContainer = require('./card-list-container');
var Surprise = require('./sound-cloud');
var FlashCardOne = require('./flash-card-one');

var ListBoard = React.createClass({
    render: function() {
        return (
            <div className="list-board">
               <h1>Board</h1>
               <CardListContainer />
                <Surprise />
                <FlashCardOne />
            </div>
        );
    }
});

module.exports = ListBoard;
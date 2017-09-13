// js/components/list-board.js
var React = require('react');
var CardListContainer = require('./card-list-container');
var Surprise = require('./sound-cloud');
var FlashCardOne = require('./flash-card-one');
var InputWithButton = require('./input-w-button');

var ListBoard = React.createClass({
    render: function() {
        return (
            <div className="list-board">
               <h1>Board</h1>
               <CardListContainer listTitle="Title One!" />
               <CardListContainer listTitle="Title Two!" />
               <CardListContainer />
                <Surprise />
                <FlashCardOne />
                <InputWithButton />

            </div>
        );
    }
});

module.exports = ListBoard;
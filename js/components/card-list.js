// js/components/card-list.js
var React = require('react');
var Card = require('./card');

var CardList = React.createClass({
    
    onAddInputChanged: function() {
        console.log("onAddInputChanged");
    },

    onAddSubmit: function() {
        console.log("onAddSubmit");
    },

    render: function() {
        return (
            <div className="card-list">
                <h2>{props.listTitle}</h2>
                <Card name="Ace"
                        imageUrl="http://estopoker.com/images/deck/classic/ha.svg"
                        job="Male model" />
                <Card name="King"
                        imageUrl="http://estopoker.com/images/deck/classic/ck.svg"
                        job="Clever chap" />
                <Card name="Queen"
                        imageUrl="http://estopoker.com/images/deck/classic/sq.svg"
                        job="Lady" />
                <Card />
                
                <form onsubmit="event.preventDefault()">
                    <input type="text" onChange={this.onAddInputChanged} />
                    <input type="submit" onClick={this.onAddSubmit} />
                </form>
                        
            </div>
        );
    }
});

module.exports = CardList;
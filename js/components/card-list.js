// js/components/card-list.js
var React = require('react');
var Card = require('./card');

var CardList = React.createClass({


    render: function() {
        return (
            <div className="card-list">
                <h2>{this.props.listTitle}</h2>
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
                
                <form>
                    <input type="text" onChange={this.props.onAddInputChanged} />
                    <input type="submit" onClick={this.props.onAddSubmit} />
                </form>
                        
            </div>
        );
    }
});

module.exports = CardList;
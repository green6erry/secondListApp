var React = require('react');
var CardList = require('./card-list');

var CardListContainer = React.createClass({
    getInitialState: function() {
        return {
            input: '',
            cards: []
        }
    },

    onAddInputChanged: function() {
        console.log("onAddInputChanged");
    },

    onAddSubmit: function(event) {
        console.log("onAddSubmit");
        event.preventDefault()
    },
    onCardClick: function() {
        if (this.state.selected == 'english') {
            this.setState({
                selected: 'french'
            });
        }
        else {
            if (this.state.selected == 'french') {
                this.setState({
                    selected: 'english'
                });
            }
        }
    },
    render: function() {
        return <CardList cards={this.state.cards} onAddSubmit={this.onAddSubmit}
                     onCardClick={this.onCardClick} listTitle={this.props.listTitle}/>;
    }
});


module.exports = CardListContainer;
var React = require('react');
var CardList = require('./card-list');

var CardListContainer = React.createClass({
    getInitialState: function() {
        return {
            input: '',
            cards: []
        }
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
        return <CardList cards={this.cards}
                     onClick={this.onCardClick} />;
    }
});


module.exports = CardListContainer;
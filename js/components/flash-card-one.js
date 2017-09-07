var React = require('react');

var FlashCardOne = React.createClass({
    getInitialState: function() {
        return {
            english: 'Grapefruit',
            french: 'Pamplemousse',
            selected: 'english'
        }
    },

    onCardClick: function() {
        if (this.state.selected == 'english') {
            this.setState({
                selected: 'french'
            });
        }
        else if (this.state.selected == 'french') {
            this.setState({
                selected: 'english'
            });
        }
    },

    render: function() {
        var style = {
            border: '1px solid black',
            height: '100px',
            lineHeight: '100px',
            width: '300px',
            textAlign: 'center',
            fontSize: '2em'
        };
        return (
            <div onClick={this.onCardClick} style={style}>
                {this.state[this.state.selected]}
            </div>
        );
    }
});

module.exports = FlashCardOne;
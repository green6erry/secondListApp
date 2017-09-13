var React = require('react');

var InputWithButton = React.createClass({
    onButtonClick: function() {
        console.log(this.textInput.value);
    },

    render: function() {
        return (
            <div>
                <input type="text" ref={function(element) {
                    this.textInput = element;
                }.bind(this)} />
                <button type="button" onClick={this.onButtonClick}>
                    Click me!
                </button>
            </div>
        );
    }
});

module.exports = InputWithButton;
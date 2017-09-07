var React = require('react');

var Card = React.createClass({
    getInitialState: function() {
        return {
            highlight: false
        };
    },
    onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
        var classes = 'card ' + (this.state.highlight ? 'highlight' : '');
        return (
             <div className={classes} onClick={this.onClick}>
                <div className="card-name">{this.props.name}</div>
                <img className="card-img" src={this.props.imageUrl} />
                <div className="card-job">
                    {this.props.job}
                </div>
            </div>
        );
    }
});

Card.defaultProps = {
    imageUrl: 'https://previews.123rf.com/images/bobyramone/bobyramone1205/bobyramone120500002/13612253-playing-card-back-side-62x90-mm-Stock-Vector-cards.jpg',
    name: 'Card',
    job: 'Playing Card'
};

module.exports = Card;
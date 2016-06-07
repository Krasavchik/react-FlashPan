var React = require('react');
var PageHeader = require('./PageHeader');

var About = React.createClass({
    render: function(){
        return(
            <PageHeader title={this.props.route.title} />
        )
    }
});

module.exports = About;

var React = require('react');
var PageHeader = require('./PageHeader');

var Home = React.createClass({
    render: function(){
        return(
            <PageHeader title={this.props.route.title} />
        )
    }
});

module.exports = Home;

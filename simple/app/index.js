var React = require('react')
var ReactDOM = require('react-dom')

var Matt = {
    name: "Matt" ,
    city: "Paris"
};

var HelloWorld = React.createClass({
    render: function(){
        return (
            <div className="container">
                <div className="col-md-12 text-xs-center">
                    <h1>
                        Hello {this.props.user.name}!
                    </h1>
                    <p>
                        You are in {this.props.user.city}.
                    </p>
                </div>
            </div>
        )
    }
});

ReactDOM.render(<HelloWorld user={Matt}/>, document.getElementById('app'));

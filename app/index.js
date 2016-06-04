var React = require('react')
var ReactDOM = require('react-dom')

var HelloWorld = React.createClass({
    render: function(){
        return (
            <div className="container">
                <div className="col-md-12 text-xs-center">
                    <h1>
                        Hello {this.props.name}!
                    </h1>
                </div>
            </div>
        )
    }
});

ReactDOM.render(<HelloWorld name="Matt"/>, document.getElementById('app'));

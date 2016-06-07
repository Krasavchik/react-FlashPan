var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({
    render: function(){
        return(
            <div className="container">
                <nav className="navbar navbar-light bg-faded">
                    <a className="navbar-brand" href="#">
                        React FlashPan
                    </a>
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <Link to='/'>
                                <span className="nav-link" href="#">
                                    Home <span className="sr-only">(current)</span>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about'>
                                <span className="nav-link" href="#">
                                    About
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <br/>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;

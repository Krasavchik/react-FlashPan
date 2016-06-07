var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var About = require('../components/About');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' components={Main}>
            <IndexRoute title="home" title="Home Page" components={Home} />
            <Route path="about" title="About page" components={About} />
        </Route>
    </Router>
);

module.exports = routes;

var React = require('react') ;

function PageHeader( props ){
    return(
        <h1>
            {props.title}
        </h1>
    )
}

module.exports = PageHeader ;

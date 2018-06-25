//var Header = React.createClass({
//    render: function () {
//        return (
//            <div> Header Here </ div>
//        );
//    }
//});

//React.render(
//    <Header name="MyHeader" />,
//    //document.getElementById('root')
//);
 
//export default Header;

import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <div class="page-header">
                <h1>Weather Radar <small>US Cities</small></h1>
            </div> 
            
        );
    }
}

export default Header;
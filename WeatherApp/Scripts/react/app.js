"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _componentsHeaderJsx = require('./components/header.jsx');

var _componentsHeaderJsx2 = _interopRequireDefault(_componentsHeaderJsx);

var Main = React.createClass({
    displayName: "Main",

    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(_componentsHeaderJsx2["default"], null),
            React.createElement(
                "div",
                { "class": "container" },
                React.createElement(
                    "div",
                    { "class": "row" },
                    React.createElement("div", { "class": "sectionOne col-sm" }),
                    React.createElement(
                        "div",
                        { "class": "sectionTwo col-sm" },
                        React.createElement(
                            "h4",
                            { "class": "mapDivTitle" },
                            "*****"
                        ),
                        React.createElement(
                            "div",
                            { "class": "MapDiv" },
                            " ",
                            React.createElement("div", { id: "map_canvas" }),
                            " "
                        )
                    )
                )
            )
        );
    }
});

React.render(React.createElement(Main, null), document.getElementById('root'));


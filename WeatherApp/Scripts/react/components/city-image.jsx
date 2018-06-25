import React, { Component } from 'react';

class CityImage extends Component {

    handleClick(e) {

        this.props.onClick(this);
    }

    componentDidUpdate() {

    }

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = { 
            name: 'no-name'
        }
        
    }
    render() {
        return (
            <div>
                <div className='sliderItem ' onClick={this.handleClick} >
                    <img src={this.props.image} /> 
                    <div className="info">
                        <h2>{this.props.name}</h2>
                        <label>Population </label> <p>{this.props.pop}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CityImage;
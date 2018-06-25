import React, { Component } from 'react';
import CityImage from './city-image.jsx'; 

class CityList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: [],
        }
    }
    componentDidMount() { 

        // get cities from remote web api
        fetch("http://foxtwolabs.com/webapiservices/sampleservice/api/cities/")
          .then(results => {

                return results.json();
          })
            .then(data => {
                this.setState({ cities: data });

                // init the slider using JQuery
                $('.contentSlider').slick({
                    infinite: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    focusOnSelect: true
                });

                // show default map , allow Bing maps to load async
                setTimeout(() => {
                    this.showRadarNow();
                }, 1000);

          });

        
    }
    componentDidUpdate() {
          // nothing needed here for now
    }
    
    render() {

        // Enumerate cities with prop values for each city to display
        var self = this;
        var cities = jQuery.map(this.state.cities, function (city, i) {
            return <CityImage key={city.Id} onClick={self.showRadarNow} name={city.Name} location={city.Location} image={city.Image} pop={city.Population} />;
        });

        return (
            <div className="listHost">
                <div className="contentSlider">
                    {cities}
                </div>
            </div>
        );
    }

    // function which shows the radar map for city based upon active component
    showRadarNow(child) {
        var location = [40.7127837, -74.0059413];

        if (child != undefined) {
            location = child.props.location;
        }
            var map = new Microsoft.Maps.Map(document.getElementById('map_canvas'), {
                center: new Microsoft.Maps.Location(location[0], location[1]),
                zoom: 8
            });
            // tile url from Iowa Environmental Mesonet of Iowa State University
            var urlTemplate = 'https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-{timestamp}/{zoom}/{x}/{y}.png';
            var timestamps = ['900913-m50m', '900913-m45m', '900913-m40m', '900913-m35m', '900913-m30m', '900913-m25m', '900913-m20m', '900913-m15m', '900913-m10m', '900913-m05m', '900913'];
            var tileSources = [];
            for (var i = 0; i < timestamps.length; i++) {
                var tileSource = new Microsoft.Maps.TileSource({
                    uriConstructor: urlTemplate.replace('{timestamp}', timestamps[i])
                });
                tileSources.push(tileSource);
            }
            var animatedLayer = new Microsoft.Maps.AnimatedTileLayer({ mercator: tileSources, frameRate: 500 });
            map.layers.insert(animatedLayer);
    }
}

export default CityList;



import Header from './components/header.jsx';
import CityList from './components/city-list.jsx'; 

var Main = React.createClass({ 
    componentDidMount() {
        
    },
    render: function () {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="sectionOne col-xs-12"> 
                            <div id="map_canvas"></div> 
                        </div>
                    </div> 
                    <div className="row">
                        <CityList />
                    </div> 
                 </div>
            </div>
        );
    }
}); 

React.render(
    <Main/> ,
    document.getElementById('root')
);


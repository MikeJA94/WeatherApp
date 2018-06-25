import Header from './components/header.jsx';
import CityList from './components/city-list.jsx'; 

var Main = React.createClass({ 
    componentDidMount() {

        //$.ajax({

        //    url: 'http://foxtwolabs.com/webapiservices/sampleservice/api/cities/',

        //    type: 'GET',

        //    dataType: 'json',

        //    success: function (data, textStatus, xhr) {

        //        console.log(data);

        //    },

        //    error: function (xhr, textStatus, errorThrown) {

        //        console.log('Error in Operation');

        //    }

        //});

        
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


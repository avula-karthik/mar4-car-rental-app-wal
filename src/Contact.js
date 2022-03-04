
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Contact extends Component {
    static defaultProps = {
        center: {
            lat: 17.45352,
            lng: 78.37034
        },
        zoom: 20
    };

    render() {
        return (
            <div  className='mapBox'>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <div>
                        lat={17.45352}
                        lng={78.37034}
                        text="West Agile Labs"
                    </div>


                </GoogleMapReact>
            </div>
        );
    }
}

export default Contact;
import React from "react";
import'./Contact.css';
import PropTypes from 'prop-types';
import {render} from "@testing-library/react";

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
        };
    }
    render(){
        return(
            <div className="Contact">

                <img src={this.props.avatar} alt="avatar-user" className="avatar"/>

                <div>

                    <h4 className="name">{this.props.name}</h4>

                    <div className="status">

                        <div
                            className={this.state.online ? 'status-online' : 'status-offline'}
                            onClick={event => {
                                const offLine = !this.state.online;
                                this.setState({online: offLine});
                            }}
                        />
                        <p className="status-text">{this.state.online ? 'Online' : 'Offline'}</p>
                    </div>
                </div>




            </div>
        );
    }

}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired
};



export default Contact;
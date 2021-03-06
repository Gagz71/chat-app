import React from "react";
import'./Contact.css';
import PropTypes from 'prop-types';

function Contact(props){
    return(
    <div className="Contact">

        <img src={props.avatar} alt="avatar-user" className="avatar"/>

        <div>

            <h4 className="name">{props.name}</h4>

            <div className="status">

                <div className={props.online ? 'status-online' : 'status-offline'}/>
                <p className="status-text">{props.status}</p>
            </div>
        </div>




    </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired
};



export default Contact;
import React from "react";
import'./Contact.css';


function Contact(){
    return(
    <div className="Contact">

        <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="avatar-user" className="avatar"/>

        <div>

            <h4 className="name">Melanie Sanchez</h4>

            <div className="status">

                <div className="status-online"/>
                <p className="status-text">online</p>
            </div>
        </div>




    </div>
    );
}

export default Contact;
import React from "react";
import GoogleMapReact from "google-map-react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './contact.styles.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="contact-container">
      <div className="address">
       
      </div>
      <form className="form">
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input required type="email" />
        <label>Phone</label>
        <input type="text" />
        <label>Your message</label>
        <textarea />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;

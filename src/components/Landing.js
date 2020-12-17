import React, { useState } from 'react';
import publicIp from 'public-ip';
import fatguy from '../images/fet.gif';
import firebase from '../firebase';
import {v4 as uuidv4} from 'uuid';
import Fade from 'react-reveal/Fade';
import './styles/Landing.css';
import paste from '../images/paste.png';
function Landing() {
    const [clientIp, setClientIp] = useState('8.8.8.8');
    const [details, setDetails] = useState(null);

    const getuserGeolocationDetails = () => {
        fetch("https://geolocation-db.com/json/8f12b5f0-2bc2-11eb-9444-076679b7aeb0")
        .then( response => response.json())
        .then( data => setDetails( data ));
        console.log(details);
    }

    (async () => {
        setClientIp(await publicIp.v4());
      })();
      
    function handleLog(clientIp) {
        const info = {
            id: uuidv4(),
            number: clientIp
        }

        if (info.number !== "") {
        const db = firebase.firestore().collection("logger");
        db
        .doc(info.number)
        .set(info)
        .catch((err) => {
            console.log(err);
        });
      }
    };

    return(
        <header onLoad={getuserGeolocationDetails} className="App-header">
            <div className="copyLink">
                <h1>EVASE.NET</h1>
                <img src={paste}></img>
            </div>
            
            <div>
                <h3 className="ip" onLoad={handleLog(clientIp)}>Your IP: {clientIp}</h3>
                {details && <ul className="details-list-container">
                    <li className="details-list-item">Location: { `${details.city}, ${details.country_name}(${details.state})` }</li>
                    <li className="details-list-item">Estimated Latitude: { `${details.latitude}` }</li>
                    <li className="details-list-item">Estimated Longitude: { `${details.longitude}` }</li>
                    </ul>}
            </div>
        </header>
    )
}

export default Landing;
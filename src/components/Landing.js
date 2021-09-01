import React, { useState } from 'react';
import publicIp from 'public-ip';
import firebase from '../firebase';
import {v4 as uuidv4} from 'uuid';
import Fade from 'react-reveal/Fade';
import './styles/Landing.css';
import paste from '../images/paste.png';
import WebFont from 'webfontloader';
import animate__animated from 'animate.css';
import Typewriter from 'typewriter-effect';

function Landing() {
    WebFont.load({
        google: {
            families: ['Montserrat:400', 'sans-serif']
        }
    })
    const [clientIp, setClientIp] = useState('8.8.8.8');
    const [details, setDetails] = useState(null);
    const [copied, setCopied] = useState();

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

    const copyToClipboard = () => {
        const el = document.createElement('textarea');
        el.value = 'evase.net';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        setCopied(true);
        
        setTimeout(() => {setCopied(false)}, 3000);
      };

    return(
        <div className="landing-wrapper">
            <div onClick={copyToClipboard} className="copy-link-wrapper animate__animated animate__fadeIn">
                <h1>EVASE.NET</h1>
                <img src={paste}></img>
            </div>
            {copied ? <h2 className="copied animate__animated animate__fadeOutUp animate__delay-2s">COPIED!</h2> : null}
                <h1 className="welcomeTo animate__animated animate__fadeInUp">WELCOME TO EVASE</h1>
            <div className="welcome-container animate__animated animate__fadeInUp">
                <div class="typeWrite">    
                    <Typewriter
                        options={{
                            strings: ['Learn', 'Build', 'Share'],
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            deleteSpeed: 40,
                        }}
                    />
                </div>
                <p className="ideas">Skills</p>
            </div>
        </div>
    )
            // <div onLoad={getuserGeolocationDetails} className="App-header">
            //     <div className="copyLink">
            //         <h1>EVASE.NET</h1>
            //         <img src={paste}></img>
            //     </div>

            // </div>
        // <div>
        //     <h3 className="ip" onLoad={handleLog(clientIp)}>Your IP: {clientIp}</h3>
        //     {details && <ul className="details-list-container">
        //         <li className="details-list-item">Location: { `${details.city}, ${details.country_name}(${details.state})` }</li>
        //         <li className="details-list-item">Estimated Latitude: { `${details.latitude}` }</li>
        //         <li className="details-list-item">Estimated Longitude: { `${details.longitude}` }</li>
        //         </ul>}
        // </div>
}

export default Landing;
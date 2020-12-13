import React, { useState } from 'react';
import publicIp from 'public-ip';
import fatguy from '../images/fet.gif';
import firebase from '../firebase';
import {v4 as uuidv4} from 'uuid';

function Landing() {
    const [ip, setIp] = useState('');

    (async () => {
        setIp(await publicIp.v4());
      })();

    function handleLog(ip) {
        const info = {
            id: uuidv4(),
            number: ip
        }

        if (info.number != "") {
        const db = firebase.firestore().collection("logger");
        db
        .doc(info.id)
        .set(info)
        .catch((err) => {
            console.log(err);
        });
     }  
    };


    return(
        <header className="App-header">
            <h1 className="logo">EVASE</h1>
            <img src={fatguy} className="myClass amimate__animated animate__fadeIn" alt="logo"/>
            <p className="title animate__animated animate__bounceIn">
            Welcome to my site
            </p>
            <small className="small animate__animated animate__fadeInUp">
            Mr Fot is running here  
            </small>
            <h3 onLoad={handleLog(ip)}>{ip}</h3>
        </header>
    )
}

export default Landing;
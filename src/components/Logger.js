import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

function Logger() {
    // You can write javascript here
    const ref = firebase.firestore().collection("logger");

    const [ips, setIps] = useState([]);
    const [loading, setLoading] = useState(false);

    function getIPs() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setIps(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getIPs();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
    // You can write HTML here
    <div>
        {ips.map((ip) => (
            <div className="ip-container">
                <h2 id="ip-number">{ip.number}</h2>
            </div>
        ))}
    </div>

    );
};

export default Logger;
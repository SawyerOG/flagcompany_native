import React, { useState } from 'react';

import { db } from '../../Config/firebase';

import Landing from './Landing';
import Login from './CrewSelect/Login';

const HomeRouter = () => {
    const [route, setRoute] = useState(1);
    const [members, setMembers] = useState([]);

    const startLogin = async () => {
        setRoute(2);
        if (members.length === 0) {
            const res = await db.collection('crewList').doc('crew').get();

            if (res.exists) {
                setMembers(res.data().list);
            } else {
                //ERROR!
                console.log('err');
            }
        }
    };

    const content =
        route === 1 ? <Landing startLogin={startLogin} /> : <Login goBack={() => setRoute(1)} members={members} />;

    return content;
};

export default HomeRouter;

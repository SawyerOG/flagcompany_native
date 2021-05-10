import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useContext } from 'react';
import { AuthContext } from './Containers/Auth/auth-context';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Landing from './Containers/Home/Landing/Landing';
import LoggedIn from './Containers/Home/LoggedIn';

const getSavedCreds = async () => {
    const creds = await AsyncStorage.getItem('@creds');

    if (creds) {
        return creds;
    }
    return false;
};

export default function App() {
    const auth = useContext(AuthContext);

    useEffect(() => {
        getSavedCreds().then((creds) => (creds ? auth.login() : null));
    }, []);

    let content = auth.isAuthed ? <LoggedIn /> : <Landing />;

    return (
        <>
            <StatusBar />
            {content}
        </>
    );
}

// const s = StyleSheet.create({
//     box: {
//         flex: 0.5,
//         borderWidth: 1,
//         borderColor: '#fff',
//         // padding: 10,
//         alignItems: 'center',
//         backgroundColor: 'coral',
//         textAlign: 'center',
//     },
// });

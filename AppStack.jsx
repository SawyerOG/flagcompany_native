import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { AuthContext } from './Containers/Auth/auth-context';

import Landing from './Containers/Home/Landing/Landing';
import LoggedIn from './Containers/Home/LoggedIn';

export default function App() {
    const auth = useContext(AuthContext);

    const content = auth.isAuthed ? <LoggedIn /> : <Landing />;

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

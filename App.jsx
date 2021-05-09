import React from 'react';

import AuthContextProvider from './Containers/Auth/auth-context';

import AppStack from './AppStack';

export default function App() {
    return (
        <AuthContextProvider>
            <AppStack />
        </AuthContextProvider>
    );
}

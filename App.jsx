import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AuthContextProvider from './Containers/Auth/auth-context';

import AppStack from './AppStack';

const theme = {
    ...DefaultTheme,
    roundness: 10,
    myOwnProperty: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#163565',
        secondary: '#a71d28',
        darkgrey: '#333',
        lightgrey: '#ccc',
        white: '#fff',
        black: '#000',
    },
};

export default function App() {
    return (
        <AuthContextProvider>
            <PaperProvider theme={theme}>
                <AppStack />
            </PaperProvider>
        </AuthContextProvider>
    );
}

// AppRegistry.registerComponent('cfc-native', () => App);

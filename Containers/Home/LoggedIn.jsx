import React, { useContext } from 'react';
import { Text, Button } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../../Containers/Auth/auth-context';

import Screen from '../../Components/Screen';

const logOutCache = async () => {
    await AsyncStorage.removeItem('@creds');
};

const LoggedIn = () => {
    const auth = useContext(AuthContext);

    const logOutHandler = () => {
        auth.logout();
        logOutCache();
    };

    return (
        <Screen>
            <Text>We are logged in!</Text>
            <Button title='Log Out' onPress={logOutHandler} />
        </Screen>
    );
};

export default LoggedIn;

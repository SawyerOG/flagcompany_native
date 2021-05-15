/* eslint-disable react/display-name */
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useContext } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from './Containers/Auth/auth-context';
import { colors } from './Config/styles';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeRoute from './Containers/Landing/HomeRoute';
import LoggedIn from './Containers/Home/LoggedIn';
import LocationInfo from './Containers/LocationInfo/LocationInfo';

const getSavedCreds = async () => {
    const creds = await AsyncStorage.getItem('@creds');
    if (creds) {
        return creds;
    }
    return false;
};

export default function App() {
    const auth = useContext(AuthContext);

    const Tab = createBottomTabNavigator();

    useEffect(() => {
        getSavedCreds().then((creds) => (creds ? auth.login() : null));
    }, []);

    const content = auth.isAuthed ? (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{ activeTintColor: colors.red }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Location Info') {
                            iconName = focused ? 'location' : 'location-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen name='Home' component={LoggedIn} />
                <Tab.Screen name='Location Info' component={LocationInfo} />
            </Tab.Navigator>
        </NavigationContainer>
    ) : (
        <HomeRoute />
    );

    return (
        <>
            <StatusBar />
            {content}
        </>
    );
}

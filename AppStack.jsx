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
import JobTypes from './Containers/JobTypes/JobTypes';
import Jobs from './Containers/Jobs/Jobs';

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
                tabBarOptions={{ activeTintColor: colors.red, keyboardHidesTabBar: true }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        switch (route.name) {
                            case 'Home':
                                iconName = focused ? 'home' : 'home-outline';
                                break;
                            case 'Jobs':
                                iconName = focused ? 'construct' : 'construct-outline';
                                break;
                            case 'Job Types':
                                iconName = focused ? 'settings' : 'settings-outline';
                                break;
                            case 'Location Info':
                                iconName = focused ? 'location' : 'location-outline';
                                break;
                            default:
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
            >
                <Tab.Screen name='Home' component={LoggedIn} />
                <Tab.Screen name='Jobs' component={Jobs} />
                <Tab.Screen name='Job Types' component={JobTypes} />
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

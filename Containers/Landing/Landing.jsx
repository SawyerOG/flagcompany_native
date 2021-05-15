/* global require */
import React from 'react';
import { useTheme, Button } from 'react-native-paper';
import { StyleSheet, Image, View, Text } from 'react-native';

import Screen from '../../Components/Screen';

const Landing = ({ startLogin }) => {
    const { colors } = useTheme();

    return (
        <Screen>
            <View style={s.Logo}>
                <Image source={require('../../Components/UI/images/logo.png')} />
            </View>
            <View style={s.Login}>
                <Text>Welcome</Text>
                <View style={s.Button}>
                    <Button mode='contained' icon='door' onPress={startLogin} color={colors.blue}>
                        Log In
                    </Button>
                </View>
            </View>
        </Screen>
    );
};

export default Landing;

const s = StyleSheet.create({
    Logo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Login: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Button: {
        width: 320,
        margin: 10,
    },
});

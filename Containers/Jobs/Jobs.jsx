import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Screen from '../../Components/Screen';

const Jobs = () => {
    return (
        <Screen>
            <View style={s.Container}>
                <Text>Who am I JOBS</Text>
            </View>
        </Screen>
    );
};

export default Jobs;

const s = StyleSheet.create({
    Container: { flex: 1 },
});

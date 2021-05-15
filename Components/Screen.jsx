import React from 'react';
import { StyleSheet, View } from 'react-native';

const Screen = ({ children }) => {
    return <View style={s.page}>{children}</View>;
};

export default Screen;

const s = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: 25,
        fontFamily: 'serif',
    },
});

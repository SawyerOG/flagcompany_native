import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../Config/styles';

import Constants from 'expo-constants';

const Screen = ({ children }) => {
    return <View style={s.page}>{children}</View>;
};

export default Screen;

const s = StyleSheet.create({
    page: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 3,
        backgroundColor: colors.white,
    },
});

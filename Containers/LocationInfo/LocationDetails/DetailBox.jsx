import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../Config/styles';

const DetailBox = ({ title, children }) => {
    return (
        <View style={s.container}>
            <Text style={s.titleText}>{title}</Text>
            {children}
        </View>
    );
};

export default DetailBox;

const s = StyleSheet.create({
    container: {
        minHeight: 80,
        marginVertical: 2,
    },
    titleText: {
        color: colors.blue,
        fontWeight: 'bold',
    },
});

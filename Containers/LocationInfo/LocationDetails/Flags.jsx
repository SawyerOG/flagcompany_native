import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../Config/styles';

import FLAG from '../../../Components/flagImages';

const Flags = ({ flag }) => {
    return (
        <View style={s.container}>
            <View style={s.details}>
                <View style={s.rowItem}>
                    <Text style={s.flagType}>{flag.flag}</Text>
                    <Text style={s.flagText}>Material: {flag.material}</Text>
                    <Text style={s.flagText}>Size: {flag.size}</Text>
                </View>
                <View style={s.rowFlag}>
                    <FLAG type={flag.flag} />
                </View>
            </View>
        </View>
    );
};

export default Flags;

const s = StyleSheet.create({
    container: {
        height: 80,
    },
    details: {
        flex: 1,
        flexDirection: 'row',
    },
    flagType: {
        color: colors.red,
        fontSize: 20,
    },
    flagText: {
        fontSize: 18,
    },
    rowItem: {
        flex: 1,
    },
    rowFlag: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

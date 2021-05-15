import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

import { colors } from '../../../Config/styles';

const MemberItem = ({ member, isSelected, selectMem }) => {
    return (
        <Pressable
            style={isSelected ? s.selected : s.container}
            onPress={() => selectMem(member)}
            android_ripple={{ color: colors.red, radius: 5 }}
        >
            <Text style={isSelected ? s.selectedtext : s.text}>{member.name}</Text>
        </Pressable>
    );
};

export default MemberItem;

const s = StyleSheet.create({
    selected: {
        backgroundColor: colors.white,
        width: '95%',
        marginBottom: 3,
        borderWidth: 3,
        borderColor: colors.red,
        borderRadius: 15,
    },
    container: {
        // backgroundColor: colors.darkgrey,
        width: '95%',
        marginBottom: 3,
        borderWidth: 3,
        borderColor: colors.darkgrey,
        borderRadius: 15,
    },
    text: {
        color: colors.black,
        textAlign: 'center',
        lineHeight: 60,
        fontSize: 20,
    },
    selectedtext: {
        color: colors.red,
        textAlign: 'center',
        lineHeight: 60,
        fontSize: 20,
    },
});

import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import { landingText } from '../../../Config/styles';
import Item from './MemberItem';

const CrewList = ({ members, selectedMember, selectMem }) => {
    return (
        <View style={s.container}>
            <Text style={s.selectText}>Who are you?</Text>
            <View style={s.scrollCont}>
                <ScrollView contentContainerStyle={s.scrollPosition}>
                    {members.map((i) => (
                        <Item key={i.id} member={i} isSelected={i.id === selectedMember.id} selectMem={selectMem} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default CrewList;

const s = StyleSheet.create({
    container: {
        flex: 2,
    },
    scrollCont: {
        height: 350,
    },
    scrollPosition: {
        flexGrow: 1,
        alignItems: 'center',
    },
    selectText: landingText,
});

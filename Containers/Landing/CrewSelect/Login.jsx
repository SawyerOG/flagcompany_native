import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { IconButton, ActivityIndicator } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase/app';
import { db } from '../../../Config/firebase';

import { AuthContext } from '../../Auth/auth-context';

import { headerText } from '../../../Config/styles';
import Screen from '../../../Components/Screen';
import CodeInput from './CodeInput';
import Item from './MemberItem';

const submitAndCreateClockInData = async (selectedMember, clockIn) => {
    try {
        let clockInId = '';
        if (clockIn) {
            const { id } = await db.collection('crewTimePunches').add({
                crewID: selectedMember.id,
                approved: false,
                timeIn: firebase.firestore.FieldValue.serverTimestamp(),
            });

            clockInId = id;
        }

        await AsyncStorage.setItem(
            '@creds',
            JSON.stringify({
                ...selectedMember,
                isAuthed: true,
                clockInId: clockInId,
            })
        );
        await AsyncStorage.setItem(
            '@authStatus',
            JSON.stringify({
                isAuthed: true,
            })
        );
    } catch (err) {
        console.log(err);
    }
};

const Login = ({ goBack, members }) => {
    const auth = useContext(AuthContext);

    const [clockIn, setClockIn] = useState(false);
    const [selectedMember, setSelectedMember] = useState({ id: '', name: '', code: '' });
    const [code, setCode] = useState('');
    const [codeError, setCodeError] = useState(false);

    const selectMemberHandler = (member) => {
        setSelectedMember(member);
        setCode('');
        setCodeError(false);
    };

    const submitCodeHandler = async () => {
        if (selectedMember.id && selectedMember.code.toString() === code) {
            // The user knows the code so lets log in.
            //User is clocking in so create a new doc with the clock in time i guess...
            try {
                await submitAndCreateClockInData(selectedMember, clockIn);
                auth.login();
            } catch (err) {
                console.log(err);
            }
        } else if (code === '') {
            return;
        } else {
            setCodeError(true);
            setCode('');
        }
    };

    const toggleClockIn = () => {
        setClockIn((p) => !p);
    };

    return (
        <Screen>
            <View style={s.container}>
                <IconButton icon='arrow-left' size={24} onPress={goBack} style={s.icon} />
                {members.length > 0 ? (
                    <View style={s.scrollCont}>
                        <Text style={headerText}>Who are you?</Text>
                        <View style={s.scroll}>
                            <ScrollView contentContainerStyle={s.scrollPosition}>
                                {members.length > 0 &&
                                    members.map((i) => (
                                        <Item
                                            key={i.id}
                                            member={i}
                                            isSelected={i.id === selectedMember.id}
                                            selectMem={selectMemberHandler}
                                        />
                                    ))}
                            </ScrollView>
                        </View>
                    </View>
                ) : (
                    <View style={s.loading}>
                        <ActivityIndicator size='large' />
                    </View>
                )}
                <CodeInput
                    code={code}
                    updateCode={setCode}
                    submit={submitCodeHandler}
                    codeError={codeError}
                    clockIn={clockIn}
                    toggleClockIn={toggleClockIn}
                />
            </View>
        </Screen>
    );
};

export default Login;

const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollCont: {
        flex: 1,
    },
    scroll: {
        flex: 1,
    },

    scrollPosition: {
        flexGrow: 1,
        alignItems: 'center',
    },
    icon: {
        margin: 0,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
});

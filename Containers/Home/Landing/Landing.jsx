/* global require */
import React, { useState, useContext } from 'react';
import { StyleSheet, Image, View, Text, Button } from 'react-native';
import { AuthContext } from '../../Auth/auth-context';

import { db } from '../../../Config/firebase';

import Screen from '../../../Components/Screen';
import CrewList from './CrewList';
import CodeInput from './CodeInput';

const Landing = () => {
    const auth = useContext(AuthContext);

    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState({ id: '', name: '', code: '' });
    const [memberCode, setMemberCode] = useState('');
    const [codeError, setCodeError] = useState(false);

    const startClockIn = async () => {
        const res = await db.collection('crewList').doc('crew').get();

        if (res.exists) {
            setMembers(res.data().list);
        } else {
            //ERROR!
            console.log('err');
        }
    };

    const selectMemberHandler = (member) => {
        setSelectedMember(member);
        setMemberCode('');
        setCodeError(false);
    };

    const submitCodeHandler = () => {
        if (selectedMember.code.toString() === memberCode) {
            console.log('yerp');
        } else if (memberCode === '') {
            return;
        } else {
            setCodeError(true);
        }
    };

    return (
        <Screen>
            <View style={s.Logo}>
                <Image source={require('../../../Components/UI/images/logo.png')} />
            </View>
            {members.length === 0 ? (
                <View style={s.Login}>
                    <Text>Welcome</Text>
                    <View style={s.Button}>
                        <Button onPress={startClockIn} title='Clock In' color='#a71d28' />
                    </View>
                </View>
            ) : (
                <CrewList members={members} selectedMember={selectedMember} selectMem={selectMemberHandler} />
            )}
            {selectedMember.id !== '' && (
                <CodeInput
                    code={memberCode}
                    updateCode={setMemberCode}
                    submit={submitCodeHandler}
                    codeError={codeError}
                />
            )}
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
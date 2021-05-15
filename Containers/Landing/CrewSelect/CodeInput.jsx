import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { TextInput, Switch } from 'react-native-paper';

import { colors, headerText } from '../../../Config/styles';

const CodeInput = ({ code, updateCode, submit, codeError, clockIn, toggleClockIn }) => {
    return (
        <View>
            <View style={s.switchContainer}>
                <Text style={headerText}> Clock In</Text>
                <Switch value={clockIn} onValueChange={toggleClockIn} color={colors.red} />
            </View>
            <TextInput
                label={codeError ? 'Wrong Code' : 'Code'}
                placeholder='Enter farts'
                mode='outlined'
                error={codeError}
                value={code}
                onChangeText={updateCode}
                onBlur={submit}
                onSub
                keyboardType='numeric'
                maxLength={4}
            />
        </View>
    );
};

export default CodeInput;

const s = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },
});

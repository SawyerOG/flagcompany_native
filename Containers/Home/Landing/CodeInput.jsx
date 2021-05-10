import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

import { landingText, colors } from '../../../Config/styles';

const CodeInput = ({ code, updateCode, submit, codeError }) => {
    return (
        <View>
            <View style={s.textCont}>
                <Text style={s.text}>Enter Code</Text>
                {codeError && <Text style={s.badCode}>Incorrect Code</Text>}
            </View>
            <TextInput
                style={s.input}
                value={code}
                onChangeText={updateCode}
                onBlur={submit}
                onSub
                keyboardType='numeric'
                maxLength={4}
                autoFocus
            />
        </View>
    );
};

export default CodeInput;

const s = StyleSheet.create({
    input: {
        // height: 40,
        margin: 12,
        borderBottomWidth: 1,
        fontSize: 30,
        textAlign: 'center',
    },
    text: landingText,
    textCont: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    },
    badCode: {
        color: colors.red,
        fontSize: 16,
    },
});

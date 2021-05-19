import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { db } from '../../Config/firebase';

import Screen from '../../Components/Screen';

const JobTypes = () => {
    const [jobTypes, setJobTypes] = useState([]);

    useEffect(() => {
        if (jobTypes.length === 0) {
            db.collection('jobTypes')
                .doc('job')
                .get()
                .then((res) => {
                    if (res.exists) {
                        console.log(res.data().types);
                        setJobTypes(res.data().types);
                    }
                });
        }
    }, [jobTypes.length]);

    return (
        <Screen>
            <View style={s.Container}>
                <Text>Who am I job types</Text>
            </View>
        </Screen>
    );
};

export default JobTypes;

const s = StyleSheet.create({
    Container: { flex: 1 },
});

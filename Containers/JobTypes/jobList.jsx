import React from 'react';
import { StyleSheet, View } from 'react-native';

import { List } from 'react-native-paper';
import Screen from '../../Components/Screen';

const icons = {
    install: 'flag-variant',
    removal: 'hand-peace',
    prep: 'shovel',
};

const JobTypes = ({ jobsObj }) => {
    return (
        <Screen>
            <View style={s.Container}>
                <List.Section>
                    {Object.keys(jobsObj).map((i) => (
                        <List.Accordion key={i} title={i} left={(props) => <List.Icon {...props} icon={icons[i]} />}>
                            {jobsObj[i].map((ii) => (
                                <List.Item key={ii.jobID} title={ii.jobName} onPress={() => console.log(ii.jobID)} />
                            ))}
                        </List.Accordion>
                    ))}
                </List.Section>
            </View>
        </Screen>
    );
};

export default JobTypes;

const s = StyleSheet.create({
    Container: { flex: 1 },
    // titleStyle: { display: 'none' },
});

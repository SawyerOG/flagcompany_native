import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { db } from '../../Config/firebase';

import Screen from '../../Components/Screen';
import JobList from './jobList';

const JobTypes = () => {
    const [jobTypes, setJobTypes] = useState({});

    useEffect(() => {
        if (Object.keys(jobTypes).length === 0) {
            db.collection('jobTypes')
                .doc('job')
                .get()
                .then((res) => {
                    if (res.exists) {
                        const jobObj = {};
                        res.data().types.forEach((i) =>
                            jobObj[i.category]
                                ? jobObj[i.category].push({ jobName: i.jobName, jobID: i.jobID })
                                : (jobObj[i.category] = [{ jobName: i.jobName, jobID: i.jobID }])
                        );
                        console.log(jobObj);
                        setJobTypes(jobObj);
                    }
                });
        }
    }, [jobTypes]);

    return (
        <Screen>
            <View style={s.Container}>{Object.keys(jobTypes).length !== 0 && <JobList jobsObj={jobTypes} />}</View>
        </Screen>
    );
};

export default JobTypes;

const s = StyleSheet.create({
    Container: { flex: 1 },
});

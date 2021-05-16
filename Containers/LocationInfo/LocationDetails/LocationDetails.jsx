/* eslint-disable react/display-name */
import React, { memo } from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { colors } from '../../../Config/styles';

const width = Dimensions.get('window').width;

import DetailBox from './DetailBox';
import Flags from './Flags';

const LocationDetails = ({ loc }) => {
    return (
        <SafeAreaView style={s.container}>
            <ScrollView>
                <View>
                    <Text style={s.headerText}>{loc.name}</Text>
                </View>
                <View style={s.details}>
                    <DetailBox title='Address Info' dWidth={width}>
                        <Text>{loc.address}</Text>
                        <Text>Lat: {loc.lat}</Text>
                        <Text>Long: {loc.long}</Text>
                    </DetailBox>
                    <DetailBox title='Monthly Info' dWidth={width}>
                        <Text>
                            {loc.monthly
                                ? `Routes: ${loc.currentRoutes.length > 0 ? loc.currentRoutes.join(', ') : 'None'}`
                                : 'This location is not part of a monthly route'}
                        </Text>
                        <Text>Comments: {loc.monthlyComments ? loc.monthlyComments : 'None'}</Text>
                    </DetailBox>
                    <DetailBox title='Pole Details' dWidth={width}>
                        <Text>Height: {loc.poleHeight}</Text>
                        <Text>Cleat: {loc.cleat}</Text>
                        <Text>Material: {loc.poleType}</Text>
                        <Text>Retainer: {loc.retainer || 'None'}</Text>
                    </DetailBox>
                </View>
                <View style={s.flags}>
                    <Text style={s.flagText}>Flags</Text>
                    {loc.flagTypes.map((i, idx) => (i.active ? <Flags key={idx.toString()} flag={i} /> : null))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default memo(LocationDetails);

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        maxHeight: Dimensions.get('window').height,
    },
    headerText: {
        fontSize: 24,
        color: colors.blue,
        textAlign: 'center',
    },
    details: {
        width: width - 13,
        flex: 1,
    },
    flags: {
        width: width - 10,
        flex: 1,
        borderColor: colors.blue,
    },
    flagText: {
        borderBottomWidth: 2,
        color: colors.blue,
        fontSize: 24,
    },
});

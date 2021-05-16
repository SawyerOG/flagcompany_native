import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../Config/styles';

const NamesBox = ({ locations, getLocation }) => {
    const Item = ({ item }) => (
        <Pressable
            style={({ pressed }) => (pressed ? [s.item, s.press] : s.item)}
            onPress={() => getLocation(item.name)}
        >
            <View style={s.title}>
                <Text>{item.name}</Text>
                <Text>{item.owner}</Text>
            </View>
            <View style={s.address}>
                <Text>{item.address}</Text>
            </View>
        </Pressable>
    );

    return (
        <View style={s.cont}>
            <SafeAreaView style={s.nameArea}>
                <FlatList data={locations} renderItem={Item} keyExtractor={(i) => i.name} />
            </SafeAreaView>
        </View>
    );
};

export default NamesBox;

const s = StyleSheet.create({
    cont: {
        minHeight: 150,
        maxHeight: 350,
        width: Dimensions.get('window').width,
        flex: 1,
        alignItems: 'center',
        elevation: 10,
        // position: 'absolute',
        // top: 75,
        backgroundColor: colors.white,
    },
    nameArea: {
        // maxHeight: 250,
        width: Dimensions.get('window').width - 5,
    },
    item: {
        borderWidth: 2,
        borderColor: colors.darkgrey,
        borderRadius: 7,
        padding: 5,
        flex: 1,
        height: 60,
        marginVertical: 2,
    },
    press: {
        backgroundColor: colors.lightgrey,
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    address: {
        flex: 1,
    },
});

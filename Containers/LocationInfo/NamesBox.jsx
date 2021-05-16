import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../Config/styles';

const NamesBox = ({ locations }) => {
    const Item = ({ item }) => (
        <Pressable style={s.item}>
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
        maxHeight: 200,
        width: Dimensions.get('window').width,
        flex: 1,
        alignItems: 'center',
    },
    nameArea: {
        maxHeight: 200,
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
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    address: {
        flex: 1,
    },
});

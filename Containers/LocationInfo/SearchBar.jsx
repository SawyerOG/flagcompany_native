import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { colors } from '../../Config/styles';

const SearchBar = ({ search, setSearch }) => {
    return (
        <View style={s.searchCont}>
            <Searchbar placeholder='Search Locations' onChangeText={setSearch} value={search} style={s.searchBox} />
        </View>
    );
};

export default SearchBar;

const s = StyleSheet.create({
    searchCont: {
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: colors.blue,
    },
    searchBox: {
        backgroundColor: colors.white,
        height: 40,
    },
});

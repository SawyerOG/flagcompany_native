/* global require */

import React from 'react';
import { Image, StyleSheet } from 'react-native';

const FLAG = ({ type }) => {
    let image;
    switch (type) {
        case 'US':
            image = <Image style={s.image} source={require('../assets/us.png')} height={30} width={30} />;
            break;
        case 'Colorado':
            image = <Image style={s.image} source={require('../assets/co.png')} height={20} width={30} />;
            break;
        default:
            image = <Image style={s.image} source={require('../assets/blankFlag.png')} height={20} width={20} />;
    }

    return image;
};

export default FLAG;

const s = StyleSheet.create({
    image: {
        width: 100,
        height: 60,
        resizeMode: 'contain',
    },
});

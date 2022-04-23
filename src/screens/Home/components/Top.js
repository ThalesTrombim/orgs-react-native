import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import logo from '../../../assets/logo.png';
import { loadTop } from '../../../services/loadDatas';

function Top() {
    const [ topInfo, setTopInfo ] = useState({
        title: "",
        sub: ""
    })
    function updateTop() {
        const data = loadTop();

        setTopInfo({
            title: data.boasVindas,
            sub: data.legenda
        })
    }

    useEffect(() => {
        updateTop() 
    }, [])

    return (
        <View style={style.topContainer}>
            <Image source={logo} style={style.img} />
            <Text style={style.welcome}>{topInfo.title}</Text>
            <Text style={style.subTitle}>{topInfo.sub}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    topContainer: {
        backgroundColor: '#F6F6F6',
        padding: 16,
    }, 
    img: {
        width: 70,
        height: 28,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646'
    },
    subTitle: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3'
    }
});

export { Top };
import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { GiveStars } from '../../../components/Stars';

function ProducerCard({ nome, imagem, distancia, estrelas }) {
    const [ select, setSelect ] = useState(false);

    return (
        <TouchableOpacity 
            style={style.card}
            onPress={() => setSelect(!select)}    
        >
            <Image source={imagem} accessibilityLabel={nome} style={style.img}/>
            <View style={style.info}>
                <View>
                    <Text style={style.name} >{nome}</Text>
                    <GiveStars 
                        amount={estrelas} 
                        editable={select}
                        big={select}
                    />
                </View>
                <Text style={style.distance}>{distancia}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 6,
        flexDirection: 'row',
        
        //ANDROID
        elevation: 4,

        //IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.72
    },

    img: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },

    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },

    name: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },

    distance: {
        fontSize: 12,
        lineHeight: 19
    }
})

export { ProducerCard };
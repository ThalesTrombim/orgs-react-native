import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import star from '../assets/estrelaCinza.png';
import fillStar from '../assets/estrela.png';

function Star({ onPress, disable = true, fill, big = false }) {
    const style = styleFunction(big);

    const getImage = () => {
        if(fill) {
            return fillStar;
        }
        return star;
    }

    return (
        <TouchableOpacity 
            onPress={onPress}
            disabled={disable}
        >
            <Image  source={getImage()} style={style.star} />
        </TouchableOpacity>
    )
}

const styleFunction = (big) => StyleSheet.create({
    star: {
        width: big ? 36 : 12,
        height: big ? 36 : 12,
        marginRight: 2
    },
})

export { Star };
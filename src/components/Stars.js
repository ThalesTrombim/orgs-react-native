import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Star } from './Star';

function GiveStars ({
    amount: oldAmount,
    editable = false,
    big= false
}) {
    const [ amount, setAmount ] = useState(oldAmount);

    function StarRender() {
        const listStars = [];

        for(let i=0; i < 5; i++){
            listStars.push(
                <Star 
                    key={i}
                    onPress={() => setAmount(i + 1)} 
                    disable={!editable} 
                    fill={i < amount} 
                    big={big} 
                />
            )
        }

        return listStars;
    }

    return (
        <View style={style.stars}>
            <StarRender />
        </View>
    )
}

const style = StyleSheet.create({
    stars: {
        flexDirection: 'row'
    }
})

export { GiveStars };
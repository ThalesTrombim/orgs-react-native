import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

import { useProducers } from '../../../hooks/useProducers';
import { ProducerCard } from './Producer';

function Producers({ top: Top }) {
    const [ title, producers ] = useProducers();

    const topContent = () => {
        return (
            <>
                <Top />
                <Text style={style.title}>{ title }</Text>
            </>
        )
    }

    return (
        <FlatList 
            data={producers}
            renderItem={({ item }) => <ProducerCard {...item} /> }
            ListHeaderComponent={topContent}
            keyExtractor={({nome}) => nome}
        />
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})

export { Producers };
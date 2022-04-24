import React, { useEffect, useState } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { loadProducers } from '../../../services/loadDatas';
import { ProducerCard } from './Producer';

function Producers({ top: Top }) {
    const [ producers, setProducers ] = useState([]);

    useEffect(() => {
        const { lista } = loadProducers();
        setProducers(lista);
    }, [])

    const topContent = () => {
        return (
            <>
                <Top />
                <Text style={style.title}>Produtores</Text>
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
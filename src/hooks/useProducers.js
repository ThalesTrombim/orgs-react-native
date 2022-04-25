import { useState, useEffect } from 'react';

import { loadProducers } from '../services/loadDatas';

export function useProducers() {
    const [ producers, setProducers ] = useState([]);
    const [ title, setTitle ] = useState('')

    useEffect(() => {
        const { lista, titulo } = loadProducers();
        setProducers(lista);
        setTitle(titulo);
    }, [])

    return [ title, producers ];
}
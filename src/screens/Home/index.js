import React from 'react';

import { Top } from './components/Top';
import { Producers } from './components/Producers';

function Home() {
    return (
        <Producers top={Top}/>
    );
}

export { Home };
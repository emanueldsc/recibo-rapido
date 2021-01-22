import React, { useState, useEffect } from 'react';

import "./style.scss";

export const SideMenu = () => {

    const [options, setOption] = useState<string[]>([]);

    useEffect(() => {
        setOption([
            'Recibo de locação',
            'Recibo de Compra'
        ]);
    }, []);

    const mudarRecibo = (recibo: any) => {
        console.log(recibo);
    }

    return (
        <ul>
            {options.map((option, idx) => <li onClick={_ => mudarRecibo(option)} className={idx % 2 == 0 ? 'active' : ''} key={idx}> {option} </li>)}
        </ul>
    );
};
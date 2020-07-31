import React, { useEffect, useState } from 'react';
import { getRateWithBase } from '../../context/fetchData';

export const Currencies = (base, symbols) => {
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchResults = async () => {
            setData(await getRateWithBase(base, symbols));
        };
        fetchResults();
    }, []);
    return <div>{console.log(data)}</div>;
};

import React, { useEffect, useState } from 'react';
import { getRateWithBase } from '../../context/fetchData';
import { Currency } from './Currency';

export const Currencies = (base, symbols) => {
    const [data, setData] = useState('');
    useEffect(() => {
        const fetchResults = async () => {
            setData(await getRateWithBase(base, symbols));
        };
        fetchResults();
    }, []);
    return (
        <div className="result-container">
            {data &&
                data.map((currency) => {
                    if (currency[0].rate != 1)
                        return (
                            <Currency
                                key={currency[0].symbol}
                                symbol={currency[0].symbol}
                                rate={currency[0].rate}
                            />
                        );
                })}
        </div>
    );
};

import React, { useEffect, useState } from 'react';
import { getRateWithBase } from '../../context/fetchData';
import { Currency } from './Currency';
import './style.css';
export const Currencies = (base, symbols) => {
    const [data, setData] = useState('');
    useEffect(() => {
        const fetchResults = async () => {
            setData(await getRateWithBase(base, symbols));
        };
        fetchResults();
    }, []);
    return (
        <table className="result-container">
            <th>Rate</th>
            <th>Currency</th>
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
        </table>
    );
};

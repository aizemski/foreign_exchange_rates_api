import React, { useEffect, useState } from 'react';
import { getRateWithBase } from '../../context/fetchData';
import { Currency } from './Currency';
import './style.css';
export const Currencies = (base, symbols) => {
    const [data, setData] = useState('');
    const [symbolSort, setSymbolSort] = useState(-1);
    const [rateSort, setRateSort] = useState(-1);
    const [lastSort, setLastSort] = useState(-1);
    useEffect(() => {
        const fetchResults = async () => {
            setData(await getRateWithBase(base, symbols));
        };
        fetchResults();
    }, []);
    useEffect(() => {
        var newData = data;
        if (lastSort === 1) {
            if (symbolSort === 1) {
                newData = newData.sort((a, b) => {
                    if (a[0].symbol < b[0].symbol) return -1;
                    else if (a[0].symbol > b[0].symbol) return 1;
                    return 0;
                });
                setData(newData);
            } else if (symbolSort === 0) {
                newData = newData.sort((a, b) => {
                    if (a[0].symbol > b[0].symbol) return -1;
                    else if (a[0].symbol < b[0].symbol) return 1;
                    return 0;
                });
            }
            setData(newData);
        } else if (lastSort === 0) {
            if (rateSort === 1) {
                newData = newData.sort((a, b) => {
                    if (a[0].rate < b[0].rate) return -1;
                    else if (a[0].rate > b[0].rate) return 1;
                    return 0;
                });
                setData(newData);
            } else if (rateSort === 0) {
                newData = newData.sort((a, b) => {
                    if (a[0].rate > b[0].rate) return -1;
                    else if (a[0].rate < b[0].rate) return 1;
                    return 0;
                });
            }
            setData(newData);
        }
    });
    const sortSymbols = () => {
        if (symbolSort === -1) {
            setSymbolSort(1);
            setLastSort(1);
        } else {
            setSymbolSort(!symbolSort);
            setLastSort(1);
        }
    };
    const sortRate = () => {
        if (rateSort === -1) {
            setRateSort(1);
            setLastSort(0);
        } else {
            setRateSort(!rateSort);
            setLastSort(0);
        }
    };
    return (
        <table className="result-container">
            <thead>
                <tr>
                    <th
                        className="pointer"
                        onClick={(e) => {
                            sortRate();
                        }}>
                        Rate
                    </th>
                    <th
                        className="pointer"
                        onClick={(e) => {
                            sortSymbols();
                        }}>
                        Currency
                    </th>
                </tr>
            </thead>
            <tbody>
                {data &&
                    data.map((currency) => {
                        if (currency[0].rate !== 1)
                            return (
                                <Currency
                                    key={currency[0].symbol}
                                    symbol={currency[0].symbol}
                                    rate={currency[0].rate}
                                />
                            );
                    })}
            </tbody>
        </table>
    );
};

import axios from 'axios';
import { useState } from 'react';

export const getSymbols = async () => {
    const fetchData = await getData();
    var symbols = ['EUR'];
    for (var symbol in fetchData.rates) {
        symbols.push(symbol);
    }
    return symbols;
};

export const getRateWithBase = async (base) => {
    const fetchData = await getData(base);
    console.log(fetchData);
};

const getData = async (params) => {
    console.log(params);
    return await axios
        .get('https://api.ratesapi.io/api/latest', { params })
        .then((response) => {
            return response.data;
        });
};

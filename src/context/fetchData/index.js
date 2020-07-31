import axios from 'axios';
import { useState } from 'react';

const getSymbols = async () => {
    const fetchData = await getData('');
    var symbols = [];
    for (var symbol in fetchData.rates) {
        symbols.push(symbol);
    }
    return symbols;
};

const getData = async (params) => {
    return await axios
        .get('https://api.ratesapi.io/api/latest')
        .then((response) => {
            return response.data;
        });
};

export default getSymbols;

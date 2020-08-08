import axios from 'axios';

export const getSymbols = async () => {
    const fetchData = await getData();
    var symbols = ['EUR'];
    for (var symbol in fetchData.rates) {
        symbols.push(symbol);
    }
    symbols.sort();
    return symbols;
};

export const getRateWithBase = async (params) => {
    const fetchData = await getData(params);
    var result = [];
    for (var i in fetchData.rates) {
        result.push([{ symbol: i, rate: fetchData.rates[i] }]);
    }
    return result;
};

const getData = async (params) => {
    return await axios
        .get('https://api.ratesapi.io/api/latest', { params })
        .then((response) => {
            return response.data;
        });
};

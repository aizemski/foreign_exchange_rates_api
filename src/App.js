import React, { useEffect, useState } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import './App.css';
import { getSymbols, getRateWithBase } from './context/fetchData';
function App() {
    const [forex, setForex] = useState('');
    const [symbols, setSymbols] = useState([]);

    useEffect(() => {
        const fetchSymbols = async () => {
            if (symbols) setSymbols(await getSymbols());
        };

        fetchSymbols();
    }, []);
    return (
        <div className="container">
            {symbols ? (
                <form>
                    <label for="currencies-base">Choose a base:</label>
                    <select id="currencies-base" name="base">
                        {symbols.map((symbol) => {
                            return <option value={symbol}>{symbol}</option>;
                        })}
                    </select>
                    <label for="currencies-symbols">Choose a symbol:</label>
                    <select id="currencies-symbols" name="symbols">
                        <option value="All">All</option>
                        {symbols.map((symbol) => {
                            return <option value={symbol}>{symbol}</option>;
                        })}
                    </select>
                </form>
            ) : (
                <p>Symbols haven't loaded</p>
            )}
        </div>
    );
}

export default App;

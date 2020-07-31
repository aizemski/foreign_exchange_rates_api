import React, { useEffect, useState } from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
import './App.css';
import { getSymbols, getRateWithBase } from './context/fetchData';
import { Currencies } from './components/Currencies';
function App() {
    const [symbols, setSymbols] = useState([]);
    const [selectedBase, setSelectedBase] = useState('');
    const [selectedSymbol, setSelectedSymbol] = useState('');
    const queryString = window.location.search.slice(1);

    useEffect(() => {
        const fetchSymbols = async () => {
            if (symbols) setSymbols(await getSymbols());
            if (queryString) {
                const requestData = queryString.split('&');
                setSelectedBase(requestData[0].split('=')[1]);
                setSelectedSymbol(requestData[1].split('=')[1]);
            }
        };

        fetchSymbols();
    }, []);
    return (
        <div className="container">
            {symbols ? (
                <>
                    <form>
                        <label htmlFor="currencies-base">Choose a base:</label>
                        <select
                            id="currencies-base"
                            name="base"
                            onChange={(e) => {
                                setSelectedBase(e.target.value);
                            }}>
                            {symbols.map((symbol) => {
                                if (symbol == selectedBase)
                                    return (
                                        <option
                                            value={symbol}
                                            key={symbol}
                                            selected>
                                            {symbol}
                                        </option>
                                    );
                                return (
                                    <option value={symbol} key={symbol}>
                                        {symbol}
                                    </option>
                                );
                            })}
                        </select>
                        <label htmlFor="currencies-symbols">
                            Choose a symbol:
                        </label>
                        <select
                            id="currencies-symbols"
                            name="symbols"
                            onChange={(e) => {
                                setSelectedSymbol(e.target.value);
                            }}>
                            <option value="All">All</option>
                            {symbols.map((symbol) => {
                                if (symbol == selectedSymbol)
                                    return (
                                        <option
                                            value={symbol}
                                            key={symbol}
                                            selected>
                                            {symbol}
                                        </option>
                                    );
                                return (
                                    <option value={symbol} key={symbol}>
                                        {symbol}
                                    </option>
                                );
                            })}
                        </select>
                        {selectedSymbol == selectedBase ? (
                            <input type="submit" disabled></input>
                        ) : (
                            <input type="submit"></input>
                        )}
                    </form>
                    {selectedSymbol && selectedBase ? (
                        <Currencies
                            base={selectedBase}
                            symbols={
                                selectedSymbol == 'All' ? '' : selectedSymbol
                            }
                        />
                    ) : (
                        ''
                    )}
                </>
            ) : (
                <p>Symbols haven't loaded</p>
            )}
        </div>
    );
}

export default App;

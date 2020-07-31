import React, { useEffect, useState } from 'react';
import './App.css';
import getSymbols from './context/fetchData';
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
            <form></form>
        </div>
    );
}

export default App;

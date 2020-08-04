import React from 'react';
import getSymbolFromCurrency from 'currency-symbol-map';
export const Currency = (props) => {
    return (
        <tr className="currency-container">
            <td>{props.rate}</td>
            <td>{props.symbol + ' ' + getSymbolFromCurrency(props.symbol)}</td>
        </tr>
    );
};

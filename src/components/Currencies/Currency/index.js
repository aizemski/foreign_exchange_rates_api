import React from 'react';

export const Currency = (props) => {
    return (
        <div className="currency-container">
            {props.symbol + ' ' + props.rate}
        </div>
    );
};

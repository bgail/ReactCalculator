import React from 'react';

function NumberSquare(props) {
    return (
        <button
            className={`${props.styles}` }
            onClick={props.onClick}
        >
        {props.number}
        </button>
    )
}

export default NumberSquare;

import React from 'react';

function NumberSquare(props) {
    return (
        <button
            className='num-btn-square'
            onClick={props.onClick}
        >
        {props.number}
        </button>
    )
}

export default NumberSquare;

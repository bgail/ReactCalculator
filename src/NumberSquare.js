import React from 'react';
import { Button } from 'react-bootstrap';

function NumberSquare(props) {
    return (
        <Button
            bsSize="large"
            onClick={props.onClick}
        >
        {props.number}
        </Button>
    )
}

export default NumberSquare;

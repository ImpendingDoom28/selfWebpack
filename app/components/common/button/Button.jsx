import React from 'react';
import './Button.css'

const Button = ({ className = "", onClick, value, isDefault }) => {
    return (
        <button
            className={(isDefault ? "defaultButton " : "") + className}
            onClick={onClick}
        >
            {value}
        </button>
    );
}

export default Button;
import React from 'react';
import Button from '../button/Button';
import './PrimaryButton.css';

const PrimaryButton = ({ value, onClick }) => {
    return (
        <div className="nextButtonWrapper">
            <Button
                onClick={onClick}
                value={value}
                isDefault={false}
                className={"primary"}
            />
        </div>
    );
}

export default PrimaryButton;
import React from 'react';
import Extras from '../../../js/Extras';
import Button from '../../common/button/Button';
import PrimaryButton from '../../common/primaryButton/PrimaryButton';
import './OrderExtra.css';

const OrderExtra = ({ setExtra, next, extra }) => {

    const isCheese = extra === Extras.cheese;
    const isBarbeque = extra === Extras.barbeque;

    return (
        <div className="extrasContainer">
            <div className="extrasSelectors">
                <Button
                    onClick={() => setExtra(Extras.cheese)}
                    value={Extras.cheese}
                    isDefault={true}
                    className={isCheese ? "selected" : ""}
                />
                <Button
                    onClick={() => setExtra(Extras.barbeque)}
                    value={Extras.barbeque}
                    isDefault={true}
                    className={isBarbeque ? "selected" : ""}
                />
            </div>
            <PrimaryButton
                value={"Далее"}
                onClick={next}
            />
        </div>
    );
}

export default OrderExtra;
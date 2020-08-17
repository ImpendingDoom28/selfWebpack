import React from 'react';
import Fillings from '../../../js/Fillings';
import Button from '../../common/button/Button';
import PrimaryButton from '../../common/primaryButton/PrimaryButton';
import './OrderFilling.css';

const OrderFilling = ({ setFilling, next, filling }) => {

    const isChickenMushrooms = filling === Fillings.chickenAndMushrooms;
    const isChickenPineapple = filling === Fillings.chickenAndPineapple;

    return (
        <div className="fillingsContainer">
            <div className="fillingsSelectors">
                <Button
                    onClick={() => setFilling(Fillings.chickenAndMushrooms)}
                    value={Fillings.chickenAndMushrooms}
                    isDefault={true}
                    className={isChickenMushrooms ? "selected" : ""}
                />
                <Button
                    onClick={() => setFilling(Fillings.chickenAndPineapple)}
                    value={Fillings.chickenAndPineapple}
                    isDefault={true}
                    className={isChickenPineapple ? "selected" : ""}
                />
            </div>
            <PrimaryButton
                value={"Далее"}
                onClick={next}
            />
        </div>
    );
}

export default OrderFilling;
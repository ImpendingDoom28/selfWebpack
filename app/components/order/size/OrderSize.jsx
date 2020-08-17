import React from 'react';
import Button from '../../common/button/Button';
import Sizes from '../../../js/Sizes';
import './OrderSize.css';
import PrimaryButton from '../../common/primaryButton/PrimaryButton';

const OrderSize = ({ setSize, next, size }) => {

    const isSmall = size === Sizes.small;
    const isMedium = size === Sizes.medium;
    const isLarge = size === Sizes.large;

    return (
        <div className="sizeContainer">
            <div className="sizeSelectors">
                <Button
                    onClick={() => setSize(Sizes.small)}
                    value={Sizes.small}
                    isDefault={true}
                    className={isSmall ? "selected" : ""}
                />
                <Button
                    onClick={() => setSize(Sizes.medium)}
                    value={Sizes.medium}
                    isDefault={true}
                    className={isMedium ? "selected" : ""}
                />
                <Button
                    onClick={() => setSize(Sizes.large)}
                    value={Sizes.large}
                    isDefault={true}
                    className={isLarge ? "selected" : ""}
                />
            </div>
            <PrimaryButton
                value={"Далее"}
                onClick={next}
            />
        </div>
    );
}

export default OrderSize;
import React from 'react';
import PrimaryButton from '../../common/primaryButton/PrimaryButton';

const OrderDelivery = ({ makeOrder }) => {
    return (
        <PrimaryButton
            onClick={makeOrder}
            value={"Заказать"}
        />
    );
}

export default OrderDelivery;
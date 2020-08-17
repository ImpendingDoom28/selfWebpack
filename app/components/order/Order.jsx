import React, { useState } from 'react';
import './Order.css';
import PageState from "../../js/PageState";
import Button from "../common/button/Button";
import OrderSize from "./size/OrderSize";
import OrderFilling from "./filling/OrderFilling";
import OrderDelivery from "./delivery/OrderDelivery";
import OrderExtra from "./extra/OrderExtra";

const Order = () => {
    const [pageState, setPageState] = useState(PageState.pageSize);

    //State for order
    const [size, setSize] = useState();
    const [filling, setFilling] = useState();
    const [extra, setExtra] = useState();

    const isSizePage = pageState === PageState.pageSize;
    const isFillingPage = pageState === PageState.pageFilling;
    const isExtraPage = pageState === PageState.pageExtra;
    const isDeliveryPage = pageState === PageState.pageDelivery;

    const setSizePage = () => setPageState(PageState.pageSize);
    const setFillingPage = () => setPageState(PageState.pageFilling);
    const setExtraPage = () => setPageState(PageState.pageExtra);
    const setDeliveryPage = () => setPageState(PageState.pageDelivery);

    const save = () => {
        if (!size && !filling && !extra) return;
        const orderObject = {
            size, filling, extra
        };
        localStorage.setItem("order", JSON.stringify(orderObject));
        console.log("Saved! ", JSON.parse(localStorage.getItem("order")));
    }

    return (
        <div className="container">
            <div className="buttons">
                <Button
                    onClick={setSizePage}
                    value={"Размер"}
                    className={isSizePage ? "selected" : ""}
                    isDefault={true}
                />
                <Button
                    onClick={setFillingPage}
                    value={"Начинка"}
                    className={isFillingPage ? "selected" : ""}
                    isDefault={true}
                />
                <Button
                    onClick={setExtraPage}
                    value={"Дополнительно"}
                    isDefault={true}
                    className={isExtraPage ? "selected" : ""}
                />
                <Button
                    onClick={setDeliveryPage}
                    value={"Способ доставки"}
                    isDefault={true}
                    className={isDeliveryPage ? "selected" : ""}
                />
            </div>
            <div className="content">
                {
                    isSizePage &&
                    <OrderSize
                        setSize={setSize}
                        size={size}
                        next={setFillingPage}
                    />
                }
                {
                    isFillingPage &&
                    <OrderFilling
                        setFilling={setFilling}
                        next={setExtraPage}
                        filling={filling}
                    />
                }
                {
                    isExtraPage &&
                    <OrderExtra
                        setExtra={setExtra}
                        next={setDeliveryPage}
                        extra={extra}
                    />
                }
                {
                    isDeliveryPage &&
                    <OrderDelivery
                        makeOrder={save}
                    />
                }
            </div>
        </div>
    );
}

export default Order;
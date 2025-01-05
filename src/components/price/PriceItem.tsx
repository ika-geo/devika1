import React from 'react';
import {priceInterface} from "../../blocks/Price";
import './price.css'

const OfferItem = (props:priceInterface) => {
    return (
        <div className="pricing-card">
            <h3 className="pricing-title coloredText2">{props.title}</h3>
            <p className="pricing-price coloredText1">{props.price}</p>
            <p className='text'>{props.text}</p>
        </div>
    );
};

export default OfferItem;
import React from 'react';
import {offerItemInterface} from "../../blocks/Offer";

import './offer.css'


const OfferItem = (props:offerItemInterface) => {
    return (
            <div className="offerItem">
                <img src={require('../../assets/img/offers/'+props.img)} alt=""/>
                <h2 className='coloredText2'>{props.title}</h2>
                <p className='text'>{props.text}</p>
            </div>
    );
};

export default OfferItem;
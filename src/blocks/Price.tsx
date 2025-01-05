import React from 'react';
import Ball from "../components/ball/Ball";
import OfferItem from "../components/offer/OfferItem";
import PriceItem from "../components/price/PriceItem";


export interface priceInterface {
    title: string,
    price: string,
    text: string
}

const priceItems: priceInterface[] = [
    {
        title: "Single-Page Website",
        price: '100$',
        text: "Custom design tailored to your business needs, Basic SEO to help your audience find you, ideal for startups and small businesses looking for a professional online presence."
    },
    {
        title: "Multi-Page Website",
        price: '250$',
        text: "Up to 5 fully functional pages, SEO optimization included for better visibility, Hosting setup and domain configuration."
    },
    {
        title: "Monthly Maintenance",
        price: 'from 30$',
        text: 'Ongoing SEO optimization to improve search rankings. Regular uptime monitoring to ensure your site stays online. Content updates and enhancements to keep your site fresh'
    }
]


const Price = () => {
    return (
        <div className="price block" id='price'>
            <div className="wrapper">
                <div className="offer__block">
                    <Ball
                        top={50}
                        left={0}
                        color="violet"
                    />
                    <Ball
                        top={50}
                        right={0}
                        color="navy"
                    />
                    <h1 className="title center">Prices</h1>
                    <div className="price__items pricing-container grid3">
                        {priceItems.map(item =>
                            <PriceItem
                                key={item.title}
                                title={item.title}
                                price={item.price}
                                text={item.text}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;
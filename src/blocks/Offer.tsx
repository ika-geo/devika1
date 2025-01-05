import React from 'react';
import Ball from "../components/ball/Ball";
import OfferItem from "../components/offer/OfferItem";

export interface offerItemInterface {
    img: string,
    title: string,
    text: string
}

const offerItems: offerItemInterface[] = [
    {
        img: 'webcites.jpg',
        title: 'Single & Multi-page Websites',
        text: 'From landing pages to multi-page websites, we deliver user-friendly and scalable solutions.\n'
    },
    {
        img: 'hosting.jpg',
        title: 'Domain & Hosting',
        text: 'We\'ll assist you in securing the perfect domain name and set up reliable hosting for your site.'
    },
    {
        img: 'deployment.jpg',
        title: 'Hosting Setup & Deployment',
        text: 'Smooth and secure deployment of your website on trusted hosting platforms.'
    },
    {
        img: 'content.jpg',
        title: 'Content Management',
        text: 'Keep your website fresh with engaging posts and regular content updates.'
    },
    {
        img: 'SEO.jpg',
        title: 'SEO Optimization',
        text: 'Boost your site\'s visibility on search engines and attract more customers.'
    },
    {
        img: 'marketing.jpg',
        title: 'Digital Marketing',
        text: 'Run effective ad campaigns to reach your target audience.'
    },
]


const Offer = () => {
    return (
        <div className="offer block" id='offer'>
            <div className="wrapper">
                <div className="offer__block">
                    <Ball
                        top={50}
                        left={0}
                        color="lime"
                    />

                    <Ball
                        top={50}
                        right={0}
                        color="blue"
                    />
                    <h1 className="title center">What We Offer</h1>
                    <div className="portfolio__items grid3">
                        {offerItems.map(item =>
                            <OfferItem
                                key={item.title}
                                img={item.img}
                                title={item.title}
                                text={item.text}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;
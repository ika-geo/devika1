import PortfolioItem from "../components/portfolioItem/PortfolioItem";
import Ball from "../components/ball/Ball";
import React, {Fragment} from "react";

interface PortfolioItemInterface{
    img: string,
    url: string,
    github: string|null,
    technologies: string[],
    stack: string
}

const portfolioItems: PortfolioItemInterface[] = [
    {
        img: 'portfolioIMG (15).jpg',
        url: 'https://alphaaesthetics.us/',
        github:null,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'coffee.png',
        url: 'https://ika-geo.github.io/coffeHouse/',
        github:null,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'hotel.png',
        url: 'https://ika-geo.github.io/hotel/',
        github:null,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'portfolioIMG (4).png',
        url: 'https://ika-geo.github.io/projectX/',
        github: 'https://github.com/ika-geo/projectX',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'portfolioIMG (1).png',
        url: 'https://plants-dev.vercel.app/',
        github:'https://github.com/ika-geo/plants_dev',
        technologies: ['React', 'SCSS', 'Typescript'],
        stack: 'React'
    },
    {
        img: 'portfolioIMG (2).png',
        url: 'https://travel-dev.vercel.app/',
        github: 'https://github.com/ika-geo/travel_dev',
        technologies: ['React', 'SCSS', 'Typescript'],
        stack: 'React'
    },
    {
        img: 'portfolioIMG (3).png',
        url: 'https://online-store-dev.vercel.app/',
        github:'https://github.com/ika-geo/online-store_dev',
        technologies: ['React', 'SCSS', 'JavaScript'],
        stack: 'React'
    },

    {
        img: 'portfolioIMG (5).png',
        url: 'https://ika-geo.github.io/myProject/',
        github: 'https://github.com/ika-geo/myProject',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'portfolioIMG (6).png',
        url: 'https://ika-geo.github.io/brunch/',
        github: 'https://github.com/ika-geo/brunch',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'portfolioIMG (7).png',
        url: 'https://ika-geo.github.io/sportStore/',
        github: 'https://github.com/ika-geo/sportStore',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'portfolioIMG (8).png',
        url: 'https://ika-geo.github.io/photography/',
        github: 'https://github.com/ika-geo/photography',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'portfolioIMG (9).png',
        url: 'https://ika-geo.github.io/yoga/',
        github: 'https://github.com/ika-geo/yoga',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    },
    {
        img: 'portfolioIMG (10).png',
        url: 'https://ika-geo.github.io/pizza/',
        github: 'https://github.com/ika-geo/pizza',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        stack: 'HTML/CSS/JS'
    }
]

const Portfolio = () => {
    return (
        <div className="portfolio block" id='Projects'>
            <div className="wrapper">
                <div className="portfolio__block">
                    <Ball
                        top={50}
                        left={0}
                        color="aqua"
                    />

                    <Ball
                        top={50}
                        right={0}
                        color="aqua"
                    />
                    <h1 className="title center">PORTFOLIO</h1>
                    <div className="portfolio__items grid4">
                        {portfolioItems.map(item=>
                            <Fragment key={item.github}>
                                <PortfolioItem
                                    img={item.img}
                                    url={item.url}
                                    github={item.github||null}
                                    technologies={item.technologies}
                                    stack={item.stack}
                                />
                            </Fragment>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
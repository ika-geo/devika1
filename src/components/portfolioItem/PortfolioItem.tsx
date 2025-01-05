import "./portfolioItem.css"

interface PortfolioItemInterface{
    img: string,
    url: string,
    github: string|null,
    technologies: string[],
    stack?: string
}

const PortfolioItem = (props:PortfolioItemInterface) => {
    return (
        <div className="cardItem">
            <a href={props.url} target='_blank'>
                <img src={require('../../assets/img/portfolio/' + props.img)} alt=""/>
            </a>
            {/*<div className='mern'>{props.stack}</div>*/}
            {/*<div className="onHover">*/}

            {/*    <ul className="technologies">*/}
            {/*        <h2 className='subTitle'>Technologies</h2>*/}
            {/*        <ul className="technologies__items flex">*/}
            {/*            {props.technologies.map(item=>*/}
            {/*                <li className='technologies__item text' key={item}>{item}</li>*/}
            {/*            )}*/}
            {/*        </ul>*/}

            {/*    </ul>*/}

            {/*    {props.github ?*/}
            {/*        <a href={props.github} className="github subTitle coloredText1" target='_blank'>Github page</a>*/}
            {/*        :*/}
            {/*        null*/}
            {/*    }*/}


            {/*    <a href={props.url} className='link subTitle coloredText2' target='_blank'>Visit page</a>*/}
            {/*</div>*/}
        </div>
    );
};

export default PortfolioItem;
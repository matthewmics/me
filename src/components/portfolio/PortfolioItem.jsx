import React from 'react'

const PortfolioItem = ({ thumbnail, title, tags, onScreenshotsClicked }) => {
    return (
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={thumbnail} alt="" />
            </div>
            <div className='portfolio__item-description'>
                <h3>{title}</h3>
                {
                    tags && tags.length > 0 &&
                    <>
                        <ul className='list-tags'>
                            {tags.map((tag, index) => {
                                return <li key={`portfolioItem-listTag-${index}`}>{tag}</li>
                            })}
                        </ul>
                    </>
                }
            </div>
            <div className="portfolio__item-cta">
                <a href="https://github.com/" className='btn btn-sm' target="_blank">GitHub</a>
                <a className='btn btn-primary btn-sm' target="_blank"
                    onClick={() => {
                        onScreenshotsClicked && onScreenshotsClicked();
                    }}>
                    Screenshots
                </a>
            </div>
        </article>
    )
}

export default PortfolioItem
import React from 'react';

const Card = ({ imgSrc, title, text, link }) => (
    <section className='card'>
        <div className="card" style={{ width: '18rem' }}>
            <img src={imgSrc} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={link} className="btn btn-primary">Ver más</a>
            </div>
        </div>
    </section>
);

export default Card;

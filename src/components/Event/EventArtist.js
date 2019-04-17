import React from 'react';
import { Link } from 'react-router-dom';

const EventArtist = ({ name, img, id }) => (
    <div className="eventArtist">
        <img className="eventArtist__img" src={img} alt={name} />
        <div className="eventArtist__text">
            <h1 className="title">{name}</h1>
            <Link to={`/artist/${id}`}>
                <button className="btn">view artist</button>
            </Link>
        </div>
    </div>
);

export default EventArtist;
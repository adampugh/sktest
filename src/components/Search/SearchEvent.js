import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';


const SearchEvent = ({ name, date, desc, img, venue, id }) => (
    <div className="searchEvent">
        <img src={img} alt={name} />
        <div className="searchEvent__text">
            <h2 className="title">{name}</h2>
            <p className="searchEvent__text__desc">{desc}</p>
            <div className="searchEvent__text__date">
                <FaCalendarAlt />
                <p>{date}</p>
            </div>
            <div className="searchEvent__text__venue">
                <FaMapMarkerAlt />
                <p>{venue}</p>
            </div>
            <Link to={`/event/${id}`}>
                <button className="btn">view details</button>
            </Link>
        </div>
    </div>
);

export default SearchEvent;
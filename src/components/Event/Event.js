import React, { Component } from 'react';
import skiddle from '../../apis/skiddle';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUser } from 'react-icons/fa';

import Navbar from '../UI/Navbar';
import Spinner from '../UI/Loader';
import EventArtist from './EventArtist';

class Event extends Component {
    state = {
        event: {},
        loading: true
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        skiddle.get(`/events/${id}/?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                this.setState({
                    event: response.data.results,
                    loading: false
                });
            }).catch(error => {

            });
    }

    render() {
        const { artists, venue, eventname, date, openingtimes, MinAge, largeimageurl, description } = this.state.event
        const { loading } = this.state;

        if (loading) {
            return <Spinner />;
        }

        return (
            <div className="event">
                <Navbar />
                <div className="event__hero">
                    <div className="event__hero__wrapper container">
                        <div className="event__hero__info">
                            <h1 className="title">{eventname}</h1>
                            <div className="event__hero__info__text">
                                <FaMapMarkerAlt />
                                <p>{venue.name}</p>
                            </div>
                            <div className="event__hero__info__text">
                                <FaCalendarAlt />
                                <p>{date}</p>
                            </div>
                            <div className="event__hero__info__text">
                                <FaClock />
                                <p>{openingtimes.doorsopen}</p>
                            </div>
                            <div className="event__hero__info__text">
                                <FaUser />
                                <p>Minimum Age: {MinAge}</p>
                            </div>
                        </div>
                        <img className="event__hero__img" src={largeimageurl} alt="event" />
                    </div>
                </div>
                <div className="event__desc container">
                    <p>{description}</p>
                </div>
                <div className="event__artists container">
                    <h1 className="title">Artists</h1>
                    { artists.map(({ artistid, image, name }) => (<EventArtist key={artistid} img={image} name={name} id={artistid} />))}
                </div>
            </div>
        )
    }
}

export default Event;
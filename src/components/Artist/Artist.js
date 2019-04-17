import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import skiddle from '../../apis/skiddle';

import Navbar from '../UI/Navbar';
import Spinner from '../UI/Loader';

class Artist extends Component {
    state = {
        artist: {},
        loading: true
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        skiddle.get(`/artist/${id}/?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                this.setState({
                    artist: response.data.results,
                    loading: false
                })
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        const { description, name, imageurl } = this.state.artist
        const { loading } = this.state;

        if (loading) {
            return <Spinner />;
        }

        return (
            <div className="artist">
                <Navbar />
                <div className="artist__wrapper container">
                    <div className="artist__img">
                        <img src={imageurl} alt={name} />
                    </div>
                    <div className="artist__text">
                        <h1 className="title">{name}</h1>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="artist__btn container">
                    <Link to="/">
                        <button className="btn">Home</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Artist;
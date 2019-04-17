import React, { Component } from 'react';
import skiddle from '../../apis/skiddle';

import Logo from '../../assets/logo.png';
import SearchEvent from './SearchEvent';

class Search extends Component {
    state = {
        keyword: '',
        events: []
    }

    handleInput = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            this.onSubmit();
        }
    }

    onSubmit = () => {
        const { keyword } = this.state;

        skiddle.get(`/events/search/?api_key=${process.env.REACT_APP_API_KEY}&keyword=${keyword}`)
            .then(response => {
                this.setState({
                    events: response.data.results
                });
            }).catch(error => {
                console.log(error);
            });
    }


    render() {
        const { keyword, events } = this.state;

        return (
            <div className="search">
                <div className="search__hero">
                    <div className="container">
                        <img className="search__hero__logo" src={Logo} alt="logo" />
                        <input 
                            className="search__hero__input" 
                            placeholder="Search for events"
                            value={keyword}  
                            onChange={this.handleInput}
                            onKeyPress={this.handleEnter}  
                        />
                    </div>
                </div>
                <div className="search__events">
                    <div className="search__events__grid container">
                    {
                        events.map(({ id, eventname, date, description, largeimageurl, venue}) => <SearchEvent 
                            key={id} 
                            id={id}
                            name={eventname} 
                            date={date} 
                            desc={description} 
                            img={largeimageurl} 
                            venue={venue.name} />)
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;
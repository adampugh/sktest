import React, { Component } from 'react';
import skiddle from '../../apis/skiddle';

import Logo from '../../assets/logo.png';


class Search extends Component {
    state = {
        keyword: ''
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

        skiddle.get(`/events/search/?api_key=${process.env.REACT_APP_API_KEY}&keyword=${keyword}`, 
        {
            method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'same-origin',
        }
        
        )
            .then(response => {
                console.log(response.data);
            }).catch(error => {

            });
    }




    render() {
        const { keyword } = this.state;

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
            </div>
        )
    }
}

export default Search;
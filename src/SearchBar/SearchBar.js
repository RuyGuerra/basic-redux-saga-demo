import React, { Component } from 'react'
import './SearchBar.css';

class SearchBar extends Component {
    state = {
        term: ''
    }

    onChangeHandler = (e) => {
        this.setState({ term: e.target.value });
    }

    render() {
        const { children, OnSearch } = this.props;
        return (
            <div className='searchbar-container'>
                <input
                    onChange={(e) => this.onChangeHandler(e)}
                    value={ this.state.term }>
                </input>
                <button
                    onClick={() => this.props.OnSearch(this.state.term)}>
                    {children}
                </button>
            </div>
        );
    }
}

export default SearchBar;
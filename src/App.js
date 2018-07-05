import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import { connect } from 'react-redux';
import * as actions from './store/actions/actions';
import ShowsList from './ShowsList/ShowsList';
import Spinner from './Spinner/Spinner';

class App extends Component {

  OnSearchHandler = (term) => {
    if (term) {
      console.log('term: ', term);
      this.props.showSearchRequested(term);
    }
  }

  render() {
    const { shows } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Basic Redux-Saga Demo</h1>
        </header>
        <SearchBar OnSearch={(term) => this.OnSearchHandler(term)}>SEARCH</SearchBar>
        {
          this.props.isFetching
          ? <Spinner/>
          : <ShowsList term={this.props.term} shows={this.props.shows}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    term: state.searchReducer.term,
    shows: state.searchReducer.shows,
    isFetching: state.searchReducer.isFetching
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    showSearchRequested: (term) => dispatch(actions.showSearchRequested(term))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

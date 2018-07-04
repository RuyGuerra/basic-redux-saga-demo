import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import { connect } from 'react-redux';
import * as actions from './store/actions/actions';

class App extends Component {

  OnSearchHandler = (term) => {
    if (term) {
      console.log('term: ', term);
      this.props.showSearchRequested(term);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Basic Redux-Saga Demo</h1>
        </header>
        <SearchBar OnSearch={(term) => this.OnSearchHandler(term)}>SEARCH</SearchBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    term: state.searchReducer.term
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    showSearchRequested: (term) => dispatch(actions.showSearchRequested(term))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import axios from 'axios';

const API_ROOT = 'http://api.tvmaze.com/';

export const fetchShows = (term) => {
  const url = `${API_ROOT}/search/shows?q=${term}`;
  return axios.get(url);
}


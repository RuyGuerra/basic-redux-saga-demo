import axios from 'axios';

// http://api.tvmaze.com/search/shows?q=house

const API_ROOT = 'http://api.tvmaze.com/';

export const fetchShows = (term) => {
  const url = `${API_ROOT}/search/shows?q=${term}`;
  // console.log('>>>>>>>>>>>>>>>>>>>>>>> URL: ', url);

  return axios.get(url);

  // try {
  //   const response = axios.get(url);
  //   console.log('response: ', response);
  // } catch (error) {
  //   console.log('Fetch error: ', error);
  // }
}


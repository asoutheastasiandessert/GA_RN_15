import axios from 'axios';

export const fetchMovie2 = () => {
  return async dispatch => {
    const movie = await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=570c36d75740509c00d865a804d826a5&language=en-US&page=1',
    );

    dispatch({
      type: 'FETCH_MOVIE',
      payload: movie.data.results,
    });
  };
};

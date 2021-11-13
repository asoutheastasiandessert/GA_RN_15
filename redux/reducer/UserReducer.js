const initialState = {
  name: 'Glints',
  age: 0,
  address: '',
  password: '',
  movieId: '',
  movie: [],
};

export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload,
      };
    case 'CHANGE_AGE':
      return {
        ...state,
        age: action.payload,
      };
    case 'CHANGE_ADDRESS':
      return {
        ...state,
        address: action.payload,
      };
    case 'CHANGE_PASSWORD':
      return {
        ...state,
        password: action.payload,
      };
    case 'SIMPAN_MOVIE_ID':
      return {
        ...state,
        movieId: action.payload,
      };

    case 'FETCH_MOVIE':
      return {
        ...state,
        movie: action.payload,
      };

    default:
      return state;
  }
}

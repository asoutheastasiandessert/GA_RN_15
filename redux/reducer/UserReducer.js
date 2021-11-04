const initialState = {
  name: 'Glints',
  age: 0,
  address: '',
  password: '',
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

    default:
      return state;
  }
}

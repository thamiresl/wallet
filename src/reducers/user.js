const initialState = {
  email: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
  case 'EMAIL_ACTION':
    return {
      ...state, email: action.email,
    };
  default:
    return state;
  }
}

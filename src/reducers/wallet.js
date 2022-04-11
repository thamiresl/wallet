const initialState = {
  currencies: [],
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case 'CURRENCIES_ACTION':
    return {
      ...state,
      currencies: Object.keys(action.currencies)
        .filter((currency) => currency !== 'USDT'),
    };
  default:
    return state;
  }
}

export default wallet;

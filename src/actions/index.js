import WalletApi from '../services/WalletApi';

export const EMAIL_ACTION = (email) => ({ type: 'EMAIL_ACTION', email });

export const CURRENCIES_ACTION = (currencies) => ({
  type: 'CURRENCIES_ACTION', currencies });

export const EXPENSES_ACTION = (expenses) => ({ type: 'EXPENSES_ACTION', expenses });

export const ERROR_ACTION = (error) => ({ type: 'ERROR_ACTION', error });

export function getApi() {
  return async (dispatch) => {
    try {
      const response = await WalletApi();
      dispatch(CURRENCIES_ACTION(response));
    } catch (error) {
      return error;
    }
  };
}

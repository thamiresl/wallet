import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { currenciesMap } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="valueInput">
            Valor:
            <input
              data-testid="value-input"
              type="text"
              name="valueInput"
              id="valueInput"
            />
          </label>

          <label htmlFor="descriptionInput">
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              name="descriptionInput"
              id="descriptionInput"
            />
          </label>

          <label htmlFor="currencyInput">
            Moeda:
            <select
              data-testid="currency-input"
              name="currencyInput"
              id="currencyInput"
            >
              { currenciesMap
                .map((element, index) => (
                  <option
                    key={ index }
                    value={ element }
                  >
                    {element}
                  </option>
                )) }
            </select>
          </label>

          <label htmlFor="payMethodInput">
            Pagamento:
            <select
              data-testid="method-input"
              name="payMethodInput"
              id="payMethodInput"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="costInput">
            Despesa:
            <select
              data-testid="tag-input"
              name="costInput"
              id="costInput"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>

      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currenciesMap: state.wallet.currencies,
});

Form.propTypes = {
  currenciesMap: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Form);

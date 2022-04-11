import React from 'react';

class Form extends React.Component {
  render() {
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
              <option>0</option>
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

export default Form;

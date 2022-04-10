import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { EMAIL_ACTION } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      btnLogin: true,
      email: '',
    };
  }

  inputVerify = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, this.btnValidade);
  }

  btnValidade = () => {
    const { password, email } = this.state;
    const passwordMinSize = 6;
    const emailValidade = /\w+@\w+\.\S+/g;
    if (emailValidade.test(email) && password.length >= passwordMinSize) {
      this.setState({
        btnLogin: false,
      });
    } else {
      this.setState({
        btnLogin: true,
      });
    }
  }

  redirectToWallet = () => {
    const { mapEmail, history } = this.props;
    const { email } = this.state;
    mapEmail(email);
    history.push('/carteira');
  }

  render() {
    const {
      email,
      password,
      btnLogin,
    } = this.state;
    return (
      <section>
        <label htmlFor="email">
          E-mail
          <input
            data-testid="email-input"
            type="text"
            id="email"
            name="email"
            value={ email }
            onChange={ this.inputVerify }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            data-testid="password-input"
            type="password"
            id="password"
            name="password"
            value={ password }
            onChange={ this.inputVerify }
          />
        </label>
        <button
          type="submit"
          id="btnLogin"
          name="btnLogin"
          disabled={ btnLogin }
          onClick={ this.redirectToWallet }
        >
          Entrar
        </button>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  mapEmail: (email) => dispatch(EMAIL_ACTION(email)),
});

Login.propTypes = {
  mapEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

// https://stackoverflow.com/questions/52109592/react-router-the-prop-history-is-undefined

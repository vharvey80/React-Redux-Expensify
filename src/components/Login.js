import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth.action';

export const Login = ({ startLogin }) => (
  <div>
    <h2>Login</h2>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(Login);
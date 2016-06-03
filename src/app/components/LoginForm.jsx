import React from 'react';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

const LoginForm = React.createClass({

  render() {
    return (

      <div className="loginForm">
      	<span className="close"></span>
      	<h2>Find what you need</h2>
      	<div className="form-inp">
      		<TextField hintText="Your name" />
      		<TextField hintText="Password" />
      		<FlatButton label="Login" />
      	</div>
      </div>
    );
  }

});

export default LoginForm;
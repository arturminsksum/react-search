import React from 'react';
import router from'./router';

const Header = React.createClass({

  render() {

    return (

      <div className="header clearfix">

        <div className="registration-field align-right">
            <span  className="h_enter" onClick={function () {
            router.navigate('home');}}>Sign in</span>
             <span className="separator"></span>
             <span  className="h_enter" onClick={function () {
            router.navigate('about');}}>Sign up</span>
        </div>

      </div>
    );
  }

});

export default Header;
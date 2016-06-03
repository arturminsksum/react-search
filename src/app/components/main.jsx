import React from 'react';
import LoginForm from './LoginForm';
import TextField from 'material-ui/lib/text-field';
import Colors from 'material-ui/lib/styles/colors';

const styles = {
  hintStyle: {
    color: Colors.white,
  },
  inputStyle: {
    color: Colors.white,
  },  
  underlineStyle: {
    bottom: 0,
  },  
  underlineFocusStyle: {
    borderColor: Colors.white,
  },  
};

const Search = React.createClass({

  render() {

    return (
        <div className="search-field">
          <TextField 
            hintText="Search" 
            hintStyle={styles.hintStyle} 
            inputStyle={styles.inputStyle}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineFocusStyle}
            style={{
              fontSize: 36,
            }} />
          <span className="icon icon-search"></span>
        </div>
    );
  },
});


const Main = React.createClass({

  render() {
  	if (this.props.currentView == 'home') {
	    return (
	      <div className="main">
	      	<Search />
	      </div>
	    );
    } else {
	    return (
	      <div className="main">
          <LoginForm />
	      </div>
	    );    	
    }
  }

});

export default Main;
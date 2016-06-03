import React from 'react';
import Header from './header';
import Main from './main';
import Footer from'./footer';
import router from'./router';

const Page = React.createClass({

  mixins: [router.mixin],

	getInitialState: function () {
    let self = this,  initialView = 'home';

    // Routes
    router.on('about', function(hash) {
      self.setState({currentView: hash});
    });
    router.on('home', function(hash) {
      self.setState({currentView: hash});
    }); 

    // Get initail view
    if (router.path) { // Browser hash has higher priority over server
      initialView = router.path;
    } else  if (this.props.currentView) { // If defined by on server or starting parameters
      initialView = this.props.currentView;
    }

    return { currentView: initialView };
    },

	handleChange: function(value) {
    	this.setState({currentView: value});
    },

  render() {

    return (
      <div className="page">
        <Header onChange={this.handleChange} />
        <Main currentView={this.state.currentView}/>
        <Footer />
      </div>
    );
  },
});

export default Page;
import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


class App extends React.Component {
  //1. add constructor
  // add helper function



  //2. render() {return is where our html comes from}

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
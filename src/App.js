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
    console.log('our input/output');
    return (
      <>
      {/* add header code, ends up here*/}
        <Header />
        {/* add main*/}
        <Main />
        {/* add footer*/}
        <Footer />
      </>
    );
  }
}
export default App;
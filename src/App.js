import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
import Form from "react-bootstrap/Form";








class App extends React.Component {
  //1. add constructor
  // add helper function

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}
    };
  }

  handleOnHide = () => {
    this.setState({
      showModal: false
    });
  };

  handleOnShow = (beastName) => {
    console.log(beastName);
    let selectedBeast = data.find(element => element.title === beastName);
    console.log("🚀 ~ file: App.js:30 ~ App ~ selectedBeast:", selectedBeast)

    this.setState({
      showModal: true,
      selectedBeast: selectedBeast
    });
  };


  //2. render() {return is where our html comes from}
  render() {
    return (
      <>
        <Header beast={this.state.beast} />
        <Main data={data} handleOnShow={this.handleOnShow} />
        <Footer>Tricia Sawyer 2023</Footer>

        <SelectedBeast
          selectedBeast={this.state.selectedBeast}
          show={this.state.showModal}
          handleOnHide={this.handleOnHide} />

      </>
    );
  }
}

export default App;
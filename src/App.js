import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  //1. add constructor
  // add helper function

constructor(props) {
  super(props);
  this.state = {
    beast: '',
    showModal: false,
    selectedBeast: ''
  };
}

addBeast = () => {
  this.setState({
    beast: this.state.beast
  });
};

handleOnHide = () => {
  this.setState({
    showModal: false
  });
};

handleOnShow = (beastName) => {
  this.setState({
    showModal: true,
    selectedBeast: beastName
  });
};


  //2. render() {return is where our html comes from}
  render() {
    return (
      <>
        <Header beast={this.state.beast}/>
        <Main addBeast={this.addBeast} data={data} handleOnShow={this.handleOnShow}/>
        <Footer>Tricia Sawyer 2023</Footer>

<selectedBeast
selectedBeast={this.state.selectedBeast}
show={this.state.showModal}
handleOnHide={this.handleOnHide}

/>

        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedBeast}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}

export default App;
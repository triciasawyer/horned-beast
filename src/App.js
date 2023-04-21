import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
import Form from "react-bootstrap/Form";

let menu = [this.state.horns];

class HornForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manyHorns: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let manyHorns = event.target.manyHorns.value;
    //add it to state

    this.setState({
      manyHorns: manyHorns,
    });
  };

  handleInput = (event) => {
    //we dont need to prevent default
    let userName = event.target.value;
    console.log("🚀 handleInput ~ userName", userName);
    //now add to state
    this.setState({
      userName: userName,
    });
  };

  handleSelect = (event) => {
    let selected = event.target.value;
    if (selected === "even") {
      let newMenu = menu.filter((number) => number % 2 === 0);
      this.setState({ sortedMenu: newMenu });
    } else if (selected === "odd") {
      //filter over our array of numbers
      let newMenu = data.filter((number) => number % 2 !== 0);
      //set state with the odds
      this.setState({ sortedData: newMenu });
    } else {
      this.setState({ sortedData: data });
    }
  };








  render() {
    let horns = this.state.horns.map((number, index) => {
      return <ListGroup.Item key={index}>{number} [index~] {this.state.horns[index]}</ListGroup.Item>;
    });

    return (
      <>
        <section className="myLayout">
          <header>Forms in React</header>
          <main>
            <section className="listHorns">
              <ListGroup>{horns}</ListGroup>
            </section>

            <Form onSubmit={this.handleSubmit}>
              <Form.Label>
                Name:
                <input type="text" name="userName" onInput={this.handleInput} />
              </Form.Label>



              <Form.Group controlId="Horns">
                <Form.Label>Horns:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>



              <p>Selected Horns</p>
              <Form.Select name="selected" onChange={this.handleSelect}>
                <option value="all">All</option>
                <option value="even">Even</option>
                <option value="odd">Odd</option>
              </Form.Select>

              <Button type="submit">Submit</Button>
            </Form>
          </main>
        </section>
      </>
    );
  }
}







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
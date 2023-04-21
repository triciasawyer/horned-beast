import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import data from './data.json';
import SelectedBeast from './SelectedBeast.js';
import Form from "react-bootstrap/Form";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {},
      sortedData: data
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

  handleSelected = (event) => {
    let selected = event.target.value;
    if (selected === '1') {
      let newData = data.filter(numHorns => numHorns.horns === 1);
      this.setState({ sortedData: newData });
    } else if (selected === '2') {
      let newData = data.filter(numHorns => numHorns.horns === 2);
      this.setState({ sortedData: newData });
    } else if (selected === '3') {
      let newData = data.filter(numHorns => numHorns.horns === 3);
      this.setState({ sortedData: newData });
    } else if (selected === '100') {
      let newData = data.filter(numHorns => numHorns.horns === 100);
      this.setState({ sortedData: newData });
    } else {
      this.setState({ sortedData: data });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
  }
  //2. render() {return is where our html comes from}
  render() {
    let data = this.state.sortedData.map((hornsNum, index) => {
      return hornsNum;
    })
    return (
      <>

        <Header beast={this.state.beast} />
        <section className='myForm'>
          <Form>
            <Form.Group>
              <label className='formTitle'> Number of Horns </label>
              <Form.Select className='selector'title="selected" onChange={this.handleSelected}>
                <option value="All"> Horns</option>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="100"> 100</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </section>

        <Main addHornedAni={this.addHornedAni} data={data} handleOnShow={this.handleOnShow} />


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
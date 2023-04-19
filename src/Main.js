import React from 'react';
import Beast from './Beast.js';
import './main.css';
import { Container, Row } from 'react-bootstrap';


class Main extends React.Component {

    render() {
        let beasts = [];
        this.props.data.map((newBeast, index) => {
            return beasts.push(
                <Beast
                    title={newBeast.title}
                    image_url={newBeast.image_url}
                    description={newBeast.description}
                    key={index}
                    addBeast={this.props.addBeast}
                    handleOnShow={this.props.handleOnShow}
                    data= {this.props.data}/>
            );
        });


        return (
            <main>
                <Container>
                    <Row lg={4} md={3} sm={2} xs={1}>
                        {beasts}
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Main;
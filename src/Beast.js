import React from 'react';
import './beast.css';
import { Card, Button, Col } from 'react-bootstrap';

class Beast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //count likes
            favorites: 0,
        };
    }

    // helper function 
    handleFavorites = () => {
        this.setState({
            favorites: this.state.favorites + 1,
        });
    };

    helpHandleOnShow = () => {
        this.props.handleOnShow(this.props.title);
    };


    render() {
        return (
            <>
                <article>
                    <Col className="mt-4 ">
                        <Card className="h-100 p-3">
                            <Card.Title onClick={this.props.title}>{this.props.addBeast}</Card.Title>
                            <Card.Img className="mb-4" onClick={this.helpHandleOnShow} src={this.props.image_url} alt={this.props.title} title={this.props.title} />
                            <p>Favorited {this.state.favorites + ' '} times</p>
                            <Button onClick={this.handleFavorites}> ❤️ </Button>
                        </Card>
                    </Col>
                </article>
            </>
        );
    }
}

export default Beast;
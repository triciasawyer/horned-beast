import React from 'react';
import Button from 'react-bootstrap/Button';
import './beast.css';

class Beast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //count likes
            favorites: 0,
            beastNeeded: false
        };
    }

    // helper function 
    handleFavorites = () => {
        this.setState({
            favorites: this.state.favorites + 1,
        });
    };

    // beastNeeded = () => {
    //     this.setState({
    //         beastNeeded: true
    //     })
    // };

    // beastGot = () => {
    //     this.setState({
    //         beastNeeded: false
    //     })
    // };


    render() {
        return (
            <>
                <article>
                    <h2>Beast: {this.props.title}</h2>
                    <p>Favorited {this.state.favorites + ' '} times</p>
                    <Button onClick={this.handleFavorites}> ❤️ </Button>
                    <img src={this.props.image_url} alt={this.props.title} />
                    <p>Description: {this.props.description}</p>

                </article>
            </>
        );
    }
}

export default Beast;
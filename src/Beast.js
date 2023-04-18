import React from 'react';

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

    beastNeeded = () => {
        this.setState({
            beastNeeded: true
        })
    };

    beastGot = () => {
        this.setState({
            beastNeeded: false
        })
    };


    render() {
        return (
            <>
                <article>
                    <h2>Animal: {this.props.title}</h2>
                    <p>Favorited {this.state.favorites + ' '} times!</p>
                    <p onClick={this.handleFavorites}> ❤️ </p>
                    <img src={this.props.image_url} alt={this.props.title} />
                    <p>Description: {this.props.description}</p>
                    <div>

                        {/* <div>{this.state.beastNeeded ? ''} */}

                    </div>
                </article>
            </>
        );
    }
}

export default Beast;
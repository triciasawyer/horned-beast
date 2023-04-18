import React from 'react';

class Beast extends React.Component {

    construcor(props) {
        // likes = 0;
    };

    // helper function 
    // handleLikes = () => {

    // };






    render() {
        return (
            <>
                <article>
                    <h2>Animal: {this.props.title}</h2>
                    <h3><img src={this.props.image_url} alt={this.props.title} /></h3>
                    <p>Description: {this.props.description}</p>
                </article>
            </>
        );
    }
}

export default Beast;
import React from 'react';

class Beast extends React.Component {

    // construcor(props) {
    //     super(props);
    //     this.state = {
    //     likes: 0,
    //     };
    // }

    // helper function 
    // handleLikes = () => {

    // };






    render() {
        return (
            <>
                <article>
                    <h2>Animal: {this.props.title}</h2>
                    <p>{this.state.likes}Likes!</p>
                    <p onClick={this.handleLikes}>Click to like this Animal</p>
                    <h3><img src={this.props.image_url} alt={this.props.title} /></h3>
                    <p>Description: {this.props.description}</p>



                    <div></div>
                </article>
            </>
        );
    }
}

export default Beast;
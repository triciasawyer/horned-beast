import React from 'react';

class Beast extends React.Component {
    render() {
        console.log('beast props', this.props.title);
        return (
            <>
                {/*<img src={this.props.image_url}/>*/}
                <article>
                    <h2>Beast Title: {this.props.title}</h2>
                    {/* <h3>Image:</h3> */}
                    <p>Description: {this.props.description}</p>
                </article>
            </>
        );
    }
}

export default Beast;
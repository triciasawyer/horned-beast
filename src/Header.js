import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header>
                <h1>Horned Beasts {this.props.beast}</h1>
            </header>
        );
    }
}

export default Header;
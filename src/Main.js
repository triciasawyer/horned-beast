import React from 'react';
import Beast from './Beast.js';

class Main extends React.Component {

    render() {
        return (
            <main>
                {/*Want animals here*/}
                {/*Create animal components and then add attributes or properties*/}
                <Beast
                    title='Rhinoceros'
                    // image_url=''
                    description='Mammal with massive bodies, stumpy legs and either one or two dermal horns' />

                <Beast
                    title='Markhor'
                    // image_url=''
                    description='Largest of the wild goat species, two spiraled horns that can grow up to five feet long' />
            </main>
        )
    }
}

export default Main;
import React from 'react';
import Beast from './Beast.js';
import data from './data.json';

class Main extends React.Component {

    render() {
        console.log(data);
        let beasts = [];
        data.forEach((newBeast, index) => {
            beasts.push(<Beast title={newBeast.title} image_url={newBeast.image_url} description={newBeast.description} key={index} />)
        });





        return (
            <main>
                {/* <Beast
                    title='Rhinoceros'
                    image_url='https://images.app.goo.gl/JgrZNUAm4tu5Tomu8'
                    description='Mammal with massive bodies, stumpy legs and either one or two dermal horns' />

                <Beast
                    title='Markhor'
                    image_url='https://images.app.goo.gl/WGR65DmqKq1x71JY8'
                    description='Largest of the wild goat species, two spiraled horns that can grow up to five feet long' /> */}
                {beasts}
            </main>
        );
    }
}

export default Main;
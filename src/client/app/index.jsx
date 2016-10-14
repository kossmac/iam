import React from 'react';
import {render} from 'react-dom';

import HeaderComponent from './components/HeaderComponent.jsx';
import AppComponent from './components/AppComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';

class Main extends React.Component {
    render () {
        return (
            <div>
                <HeaderComponent />
                <AppComponent items={this.props.items} />
                <FooterComponent />
            </div>
        );
    }
}

var ITEMS = [
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '12.2.2016'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M2', tags: ['cat', 'dog'], date: '2.6.2014'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M3', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M4', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M5', tags: ['cat', 'dog'], date: '12.2.2016'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M6', tags: ['cat', 'dog'], date: '2.6.2014'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M7', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M8', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M9', tags: [], date: '12.2.2016'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M10', tags: ['cat', 'dog'], date: '2.6.2014'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M11', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M12', tags: ['cat'], date: '16.8.2015'},
];

render(<Main items={ITEMS} />, document.getElementById('app'));
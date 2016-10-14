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
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '2.6.2014'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '12.2.2016'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '2.6.2014'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: [], date: '12.2.2016'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '2.6.2014'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat'], date: '16.8.2015'},
];

render(<Main items={ITEMS} />, document.getElementById('app'));
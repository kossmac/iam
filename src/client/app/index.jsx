import React from 'react';
import {render} from 'react-dom';

import ListComponent from './ListComponent.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.onTile = this.onTile.bind(this);
    }

    onTile () {
        document.body.className == 'tile' ? document.body.className = '' : document.body.className = 'tile';
    }

    render () {
        return (
            <header>
                <div id="sandwich-icon"></div>
                <div id="main-title">Medien</div>
                <div id="plus-icon"></div>
                <button id="tile-icon" onClick={this.onTile} />
            </header>
        );
    }
}

class App extends React.Component {
    render () {
        return (
            <main>
                <ListComponent items={this.props.items} />
            </main>
        );
    }
}

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <div id="logout-icon"></div>
                <div id="refresh-icon"></div>
            </footer>
        );
    }
}

class Main extends React.Component {
    render () {
        return (
            <div>
                <Header/>
                <App items={this.props.items} />
                <Footer/>
            </div>
        );
    }
}


var ITEMS = [
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '12.2.2016'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '2.6.2014'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '8.2.2017'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: [], date: '4.6.2013'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat'], date: '15.1.2011'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '12.2.2016'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '2.6.2014'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '8.2.2017'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: [], date: '4.6.2013'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat'], date: '15.1.2011'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '12.2.2016'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '2.6.2014'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '8.2.2017'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: [], date: '4.6.2013'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat'], date: '15.1.2011'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '12.2.2016'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '2.6.2014'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '8.2.2017'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: [], date: '4.6.2013'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat'], date: '15.1.2011'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '12.2.2016'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '2.6.2014'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '8.2.2017'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: [], date: '4.6.2013'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat'], date: '15.1.2011'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '12.2.2016'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '2.6.2014'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '16.8.2015'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat', 'dog'], date: '8.2.2017'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: [], date: '4.6.2013'},
    {image_url: 'http://lorempixel.com/85/85', name: 'M1', tags: ['cat'], date: '15.1.2011'},
];

render(<Main items={ITEMS} />, document.getElementById('main'));

import React from 'react';
import {randomFromArray} from '../helper'

class Header extends React.Component {
    constructor() {
        super();
        this.onSwitch = this.onSwitch.bind(this);
        this.createItem = this.createItem.bind(this);
        this.img_libs = [
            'placekitten.com',
            'placebear.com',
            'baconmockup.com',
            'placehold.it',
            'placeskull.com',
            'fillmurray.com',
            'lorempixel.com',
            'www.placecage.com'
        ]
    }

    onSwitch () {
        var main = document.querySelector('main');

        function switchClass() {
            document.body.classList.toggle('tile');
            main.removeEventListener('transitionend', switchClass);
            main.classList.toggle('empty');
        }

        main.addEventListener('transitionend', switchClass, false);
        main.classList.toggle('empty')
    }

    createItem () {
        const item = {
            added: (new Date()).toLocaleDateString(),
            owner: 'karsten',
            src: 'http://'+ randomFromArray(this.img_libs) + '/85/85',
            numOfTags: 10
        };
        this.props.addItem(item);
    }

    render () {
        return (
            <header>
                <div id="sandwich-icon"></div>
                <div id="main-title">{ this.props.tagline }</div>
                <div id="plus-icon" onClick={this.createItem}></div>
                <div id="view-icon" onClick={this.onSwitch} />
            </header>
        );
    }
}

export default Header;
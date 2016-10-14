import React from 'react';

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)
        this.onSwitch = this.onSwitch.bind(this)
        this.switchClass = this.switchClass.bind(this)
    }

    switchClass() {
        var main = document.getElementById('main');
        document.body.className == 'tile' ? document.body.className = '' : document.body.className = 'tile';
        main.removeEventListener('transitionend', this.switchClass);
        main.className == 'empty' ? main.className = '' : main.className = 'empty';
    }

    onSwitch () {
        var main = document.getElementById('main');
        main.className == 'empty' ? main.className = '' : main.className = 'empty';
        main.addEventListener('transitionend', this.switchClass, false)
    }

    render () {
        return (
            <header>
                <div id="sandwich-icon"></div>
                <div id="main-title">Medien</div>
                <div id="plus-icon"></div>
                <button id="view-icon" onClick={this.onSwitch} />
            </header>
        );
    }
}

export default HeaderComponent;
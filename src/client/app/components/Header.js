import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.onSwitch = this.onSwitch.bind(this);
        this.switchClass = this.switchClass.bind(this)
    }

    switchClass() {
        var main = document.getElementById('main');
        document.body.classList.toggle('tile');
        main.removeEventListener('transitionend', this.switchClass);
        main.classList.toggle('empty');
    }

    onSwitch () {
        var main = document.getElementById('main');
        main.addEventListener('transitionend', this.switchClass, false);
        main.classList.toggle('empty')
    }

    render () {
        return (
            <header>
                <div id="sandwich-icon"></div>
                <div id="main-title">{ this.props.tagline }</div>
                <div id="plus-icon"></div>
                <div id="view-icon" onClick={this.onSwitch} />
            </header>
        );
    }
}

export default Header;
import React from 'react';

class HeaderComponent extends React.Component {
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

export default HeaderComponent;
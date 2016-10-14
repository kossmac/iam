import React from 'react';

class FooterComponent extends React.Component {
    reload() {
        location.reload()
    }

    render () {
        return (
            <footer>
                <div id="logout-icon"></div>
                <button id="refresh-icon" onClick={this.reload}/>
            </footer>
        );
    }
}

export default FooterComponent;
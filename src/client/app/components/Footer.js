import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer>
                <div id="logout-icon"></div>
                <button id="refresh-icon" onClick={this.props.loadItems}/>
            </footer>
        );
    }
}

export default Footer;
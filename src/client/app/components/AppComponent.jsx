import React from 'react';

import ListComponent from './ListComponent.jsx';

class AppComponent extends React.Component {
    render () {
        return (
            <main>
                <ListComponent items={this.props.items} />
            </main>
        );
    }
}

export default AppComponent;
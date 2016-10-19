import React from 'react';
import {render} from 'react-dom';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

class App extends React.Component {
    constructor() {
        super();

        this.loadItems = this.loadItems.bind(this);

        this.state = {
            items: {}
        };
    }

    loadItems() {
        if (this.state.items.length > 0) {
            this.setState({
                items: []
            });
        }

        var request = new XMLHttpRequest();
        request.open('GET', this.props.source);
        request.addEventListener('load', function (event) {
            if (request.status == 200) {
                this.setState({
                    items: eval("(" + request.responseText + ")")
                });
            }
        }.bind(this));

        request.send();
    }

    render () {
        return (
            <div>
                <Header tagline="Medien" />
                <main id="main">
                    <List loadItems={this.loadItems} items={this.state.items} />
                </main>
                <Footer loadItems={this.loadItems} />
            </div>
        );
    }
}

render(<App source="http://iam.kossmac.de/data.json" />, document.getElementById('app'));
import React from 'react';
import {render} from 'react-dom';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

class App extends React.Component {
    constructor() {
        super();

        this.loadItems = this.loadItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);

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

    addItem(item) {
        const items = this.state.items.slice();
        items[items.length] = item;
        this.setState({items});
    }

    removeItem(key) {
        const items = this.state.items.slice();
        delete items[key];
        this.setState({items});
    }

    render () {
        return (
            <div>
                <Header
                    tagline="Medien"
                    addItem={this.addItem}
                />
                <main id="main">
                    <List
                        loadItems={this.loadItems}
                        removeItem={this.removeItem}
                        items={this.state.items}
                    />
                </main>
                <Footer
                    loadItems={this.loadItems}
                />
            </div>
        );
    }
}

render(<App source="http://iam.kossmac.de/data.json" />, document.getElementById('app'));
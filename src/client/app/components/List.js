import React from 'react';

import Item from '../components/Item'

class List extends React.Component {
    componentDidMount() {
        this.props.loadItems();
    }

    render () {
        return (
            <ul>
                {
                    Object
                        .keys(this.props.items)
                        .map(key => <Item key={this.props.items[key].name} details={this.props.items[key]} />)
                }
            </ul>
        );
    }
}

export default List;
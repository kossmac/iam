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
                        .map(key => <Item key={key} index={key} details={this.props.items[key]} removeItem={this.props.removeItem} />)
                }
            </ul>
        );
    }
}

export default List;
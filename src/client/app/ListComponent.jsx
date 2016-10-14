import React from 'react';

import ListItemComponent from './ListItemComponent.jsx';


class ListComponent extends React.Component {
    render() {
        var items = [];
        this.props.items.forEach(function(item, i) {
            items.push(<ListItemComponent key={i} image_url={item.image_url} name={item.name} tags={item.tags} date={item.date} />)
        });

        return (
            <ul>
                {items}
            </ul>
        );
    }
}

export default ListComponent;
import React from 'react';

class ListItemComponent extends React.Component {
    render() {
        var image_url_base = this.props.image_url.split('/')[2];
        var tag_length = this.props.tags.length;
        return (
            <li>
                <img src={this.props.image_url} className="list-image" />
                <div className="grey-text-in-list-item list-image-source">
                    {image_url_base}
                </div>
                <div className="list-image-title">
                    {this.props.name}
                </div>
                <div className="grey-text-in-list-item list-image-tags">
                    {tag_length}
                </div>
                <div className="grey-text-in-list-item list-image-date">
                    {this.props.date}
                </div>
                <div className="list-image-options"></div>
            </li>
        )
    };
}

export default ListItemComponent;
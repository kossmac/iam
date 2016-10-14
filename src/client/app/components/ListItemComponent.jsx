import React from 'react';

class ListItemComponent extends React.Component {
    constructor(props) {
        super(props)
        this.showAlert = this.showAlert.bind(this)
        this.showAlertWithName = this.showAlertWithName.bind(this)
        this.showAlertWithNameAndUrl = this.showAlertWithNameAndUrl.bind(this)
    }

    showAlertWithName(event) {
        if (event.target.tagName == 'LI') {
            var message = []
            message.push(this.props.name)
            this.showAlert(message);
        }
    };

    showAlertWithNameAndUrl() {
        var message = []
        message.push(this.props.name)
        message.push(this.props.image_url)
        this.showAlert(message);
    };

    showAlert(message) {
        var str = "";
        message.forEach(function (item) {
            str = str.concat(item + '\n')
        });
        alert(str)
    }

    render() {
        var image_url_base = this.props.image_url.split('/')[2];
        var tag_length = this.props.tags.length;
        return (
            <li onClick={this.showAlertWithName}>
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
                <div onClick={this.showAlertWithNameAndUrl} className="list-image-options"></div>
            </li>
        )
    };
}

export default ListItemComponent;
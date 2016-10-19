import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.showAlert = this.showAlert.bind(this);
        this.showAlertWithName = this.showAlertWithName.bind(this);
        this.showAlertWithNameAndUrl = this.showAlertWithNameAndUrl.bind(this);
        this.lookupEventTarget = this.lookupEventTarget.bind(this);
    }

    lookupEventTarget(el) {
        if (el.tagName.toLowerCase() == "li") {
            return el;
        }
        else if (el.tagName.toLowerCase() == "ul") {
            return null;
        }
        else if (el.parentNode) {
            return this.lookupEventTarget(el.parentNode);
        }
    }

    showAlertWithName(event) {
        var eventTarget = this.lookupEventTarget(event.target);
        if (eventTarget) {
            var message = [];
            message.push(this.props.details.name);
            this.showAlert(message);
        }
    };

    showAlertWithNameAndUrl(event) {
        var message = [];
        message.push(this.props.details.name);
        message.push(this.props.details.image_url);
        this.showAlert(message);
        event.stopPropagation();
    };

    showAlert(message) {
        var str = "";
        message.forEach(function (item) {
            str = str.concat(item + '\n')
        });
        alert(str)
    }

    render() {
        const { details } = this.props;
        var image_url_base = details.image_url.split('/')[2];
        var tag_length = details.tags.length;
        return (
            <li onClick={this.showAlertWithName}>
                <img src={details.image_url} className="list-image" />
                <div className="grey-text-in-list-item list-image-source">
                    {image_url_base}
                </div>
                <div className="list-image-title">
                    {details.name}
                </div>
                <div className="grey-text-in-list-item list-image-tags">
                    {tag_length}
                </div>
                <div className="grey-text-in-list-item list-image-date">
                    {details.date}
                </div>
                <div onClick={this.showAlertWithNameAndUrl} className="list-image-options"></div>
            </li>
        )
    };
}

export default Item;
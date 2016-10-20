import React from 'react';

class Item extends React.Component {
    constructor() {
        super();
        this.showAlert = this.showAlert.bind(this);
        this.delete = this.delete.bind(this);
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

    delete(event, key) {
        if (confirm("Do you really want to delete this item?")) {
            console.log('deleting...' + key);
            this.props.removeItem(key);
        }
        event.stopPropagation();
    };

    showAlert(event) {
        var eventTarget = this.lookupEventTarget(event.target);
        if (eventTarget) {
            alert(this.props.details.owner);
        }
    }

    render() {
        const { details } = this.props;
        var image_url_base = details.src.split('/')[2];

        return (
            <li onClick={this.showAlert}>
                <img src={details.src} className="list-image" />
                <div className="grey-text-in-list-item list-image-source">
                    {image_url_base}
                </div>
                <div className="list-image-title">
                    {details.owner}
                </div>
                <div className="grey-text-in-list-item list-image-tags">
                    {details.numOfTags}
                </div>
                <div className="grey-text-in-list-item list-image-date">
                    {details.added}
                </div>
                <div onClick={(e) => this.delete(e, this.props.index)} className="list-image-options"></div>
            </li>
        )
    }
}

export default Item;
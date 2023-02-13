import React from "react";
import AlertDialog from "./Dialog";


class ItemList extends React.Component {
    removeBtnOnClick = () => {
        this.props.removeItem(this.props.data.id);
    }

    render() {
        return (
            <li>
                {this.props.data.item}
                <AlertDialog onClickDelete={this.removeBtnOnClick}>Remove</AlertDialog>
            </li>
        );
    }
}

export default ItemList;
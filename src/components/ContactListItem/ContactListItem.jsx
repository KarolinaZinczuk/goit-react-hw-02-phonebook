import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactListItem.module.css";

class ContactListItem extends Component {
    static defaultProps = {
        id: '',
        name: '',
        number: '',
    };

    static propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }

    render() {
        const { id, name, number, handleRemove } = this.props;
        return (
            <li id={id} className={styles.item}>
                {name}: {number}
                <button className={styles.button} onClick={() => handleRemove(id)}>
                    Delete
                </button>
            </li>
        )
    }
}

export default ContactListItem ;
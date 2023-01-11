import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

class Filter extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }

    render() {
        const { value, onChange } = this.props;
        return (
            <div className={styles.section}>
                <h2>Find contacts by name</h2>
                <input className={styles.input} onChange={onChange} value={value}></input>
            </div>
        )
    }
}

export default Filter ;
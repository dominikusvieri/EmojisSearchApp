import PropTypes from "prop-types";
import styles from "./Input.module.css";
import React from "react";

const Input = ({onChange, value}) => {
    return(
        <input
            className={styles.input}
            onChange={onChange}
            placeholder="Search for an emoji..."
            value={value}
        />
    )
}

Input.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default Input;
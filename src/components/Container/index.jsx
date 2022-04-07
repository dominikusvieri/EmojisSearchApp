import PropTypes from 'prop-types';
import styles from './Container.module.css';
import React from 'react';

const Container = ({ children }) => {
    return(
        <section className={styles.container}>
            {children}
        </section>
    )
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container;
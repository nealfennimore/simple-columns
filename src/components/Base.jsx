import React from 'react';
import PropTypes from 'prop-types';

const Base = ( {
    el: Element,
    children,
    ...rest
} ) =>{
    return (
        <Element {...rest}>
            { children }
        </Element>
    );
};

Base.propTypes = {
    el: PropTypes.string,
    /* eslint-disable react/require-default-props */
    children: PropTypes.oneOfType( [
        PropTypes.arrayOf( PropTypes.node ),
        PropTypes.node
    ] ),
    /* eslint-enable react/require-default-props */
};

Base.defaultProps = {
    el: 'div'
};

export default Base;

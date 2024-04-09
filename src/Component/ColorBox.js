import React from 'react';
import PropTypes from 'prop-types';

function ColorBox(props) {
    const { color } = props;
    return (
        <div className="box" style={{ backgroundColor: color }}></div>
    )
}
// declare all props used in this component
ColorBox.prototype = {
    color: PropTypes.string.isRequired,
    rounded: PropTypes.bool,
}
// don't forget to set default value for non-required props
ColorBox.defaultProps = {
    rounded: true
};
export default ColorBox;
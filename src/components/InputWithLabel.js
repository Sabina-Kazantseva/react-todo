import React, { useEffect, useRef } from 'react';
import style from './InputWithLabel.module.css';
import PropTypes from 'prop-types'; // Import PropTypes

function InputWithLabel({ id, value, onInputChange, label, type, children, autoFocus }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    });
    return (
        <>
            <label className={style.Label} htmlFor={id}>{children}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onInputChange}
                ref={inputRef} // Assign the ref to the input element

            />
        </>
    );
    // Define propTypes for InputWithLabel
    InputWithLabel.propTypes = {
        id: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onInputChange: PropTypes.func.isRequired,
        label: PropTypes.string,
        type: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
        autoFocus: PropTypes.bool,
    };


}
export default InputWithLabel;
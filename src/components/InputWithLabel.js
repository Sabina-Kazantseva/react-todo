import React, { useEffect, useRef } from 'react';
import style from './InputWithLabel.module.css';
import PropTypes from 'prop-types'; // Import PropTypes

function InputWithLabel({ id, value, onInputChange, label, type, children, placeholder }) {
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
                placeholder={placeholder}
                onChange={onInputChange}
                ref={inputRef} // Assign the ref to the input element

            />
        </>
    );
}

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onInputChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    placeholder: PropTypes.string.isRequired,
}
export default InputWithLabel;

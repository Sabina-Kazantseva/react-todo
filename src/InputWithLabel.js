import React, { useEffect, useRef } from 'react';
function InputWithLabel({ id, value, onInputChange, label, type, children, autoFocus }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    });
    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onInputChange}
                ref={inputRef} // Assign the ref to the input element

            />

        </>
    );

}
export default InputWithLabel;
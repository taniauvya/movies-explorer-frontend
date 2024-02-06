import React from "react";

const ValidatedInput = ({ onChange, validationFunc, element: Component, ...elementProps }) => {

    const inputRef = React.useRef();

    const handleChange = (event) => {
        if (validationFunc) {
            inputRef.current.setCustomValidity(validationFunc(inputRef.current.value));
        }
        onChange(event);
    }

    return (
        <Component {...{inputRef, onChange: handleChange, ...elementProps}} />
    );
}

export default ValidatedInput
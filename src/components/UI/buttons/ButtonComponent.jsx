import React from 'react';

const ButtonComponent = ({value, className}) => {

    const styles = {
        border: "none",
        borderRadius: "7px",
        padding: "16px 12px",
        fontSize: "15px",
        fontWeight: "bold",
        color: "#333"
    }

    return (
        <button style={styles} className={className}>{value}</button>
    );
};

export default ButtonComponent;
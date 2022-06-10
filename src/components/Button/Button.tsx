import React from "react";
import './button.sass';

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button>{props.label}</button>;
};

export default Button;
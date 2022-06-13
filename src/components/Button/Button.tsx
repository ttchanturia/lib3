import React from "react";
import './button.sass';

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button className='up-button-primary up-button up-button-fixed'>{props.label}</button>;
};

export default Button;
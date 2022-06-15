import React, { useEffect, useState } from "react";
import { buttonClasses, ButtonColor, ButtonColors, ButtonType, ButtonTypes, ButtonWidth, buttonWidthClasses } from "./button.constants";
import './button.sass';
import { ButtonCSSClasses } from "./enums/button-css-class.enum";
import { AppTheme, AppThemes } from "../theme/types/types";
import { disabled as disabledConst } from "../globals.enum";

export interface ButtonProps {
    label: string
    width?: ButtonWidth
    color?: ButtonColor
    type?: ButtonType
    theme?: AppTheme
    disabled?: boolean
}

const Button = (props: ButtonProps) => {
    const [buttonStyle, setbuttonStyle] = useState<string[]>(
        [ButtonCSSClasses.BASE, buttonClasses.get(ButtonTypes.PRIMARY)])

    useEffect(() => {
        const { width, color, type, theme, disabled } = props
        const changes: string[] = [ButtonCSSClasses.BASE, buttonClasses.get(type)]

        if (theme === AppThemes.DARK) {
            changes.push(ButtonCSSClasses.DARK_THEME)
        }
        if (color === ButtonColors.DANGER) {
            switch (type) {
                case ButtonTypes.PRIMARY:
                    changes.push(ButtonCSSClasses.PRIMARY_DANGER)
                    break;
                case ButtonTypes.SECONDARY:
                    changes.push(ButtonCSSClasses.SECONDARY_DANGER)
                    break;
                case ButtonTypes.SECONDARY_OUTLINE:
                    changes.push(ButtonCSSClasses.SECONDARY_OUTLINE_DANGER)
                    break;
                case ButtonTypes.TERTIARY:
                    changes.push(ButtonCSSClasses.TERTIARY_DANGER)
                    break;
                case ButtonTypes.ROUNDED:
                    changes.push(ButtonCSSClasses.ROUNDED_DANGER)
                    break;
            }
        }

        changes.push(buttonWidthClasses.get(width))

        disabled && changes.push(disabledConst)
        setbuttonStyle(changes)
    }, [props])

    return (
        <button className={buttonStyle.join(' ')}>
            {props.label}
        </button>
    )

};

export default Button;
import React, { useEffect, useState } from "react";
import IconMap, { IconType, getIconFromName } from "./Icon.constants";
import { IdeaMedium, LanguageMedium } from ".";

export interface IconProps {
    icon: IconType,
    width?: string,
    color?: string
    height: string
}

const Icon = (props: IconProps) => {
    console.log(props)
    return (
        <div style={{ color: props.color, width: props.width, height: props.height }}>
            {getIconFromName(props.icon)}
            {/* <props.icon color={props.color} /> */}
        </div>
    )

};

export default Icon;
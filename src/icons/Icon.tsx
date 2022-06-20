import React, { useEffect, useState } from "react";
import IconTypes, { IconType, IconTypess } from "./Icon.constants";
import iconsStories from "./icons.stories";
import { IdeaMedium, LanguageMedium } from ".";

export interface IconProps {
    icon: typeof IdeaMedium | typeof LanguageMedium
    width?: string,
    color?: string
    height: string
}

const Icon = (props: IconProps) => {
    //console.log(IconTypes[props.icon])

    return (
        <div style={{ color: props.color, width: props.width, height: props.height }}>
            {/* {IconTypes[props.icon]()} */}
            <props.icon color={props.color} />
        </div>
    )

};

export default Icon;
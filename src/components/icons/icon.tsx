import React, { useState } from 'react';
import { upIcon } from './lib';
import { designSystemIcons } from './utils/design-system-icons';

export interface ButtonProps {
  upIcon: upIcon
  fallback: upIcon
  color: string
  height: string
  width: string
}

export const Icon = (props: ButtonProps) => {
  const [upIcon, setUpIcon] = useState<upIcon>(props.upIcon)
  const [fallback, setfallback] = useState<upIcon>(props.fallback)
  const [color, setColor] = useState<string>(props.color)
  const [height, setHeight] = useState<string>(props.height)
  const [width, setWidth] = useState<string>(props.width)

  const findIcon = (iconId: string): JSX.Element => {
    console.log('iconId', iconId)
    const icon = designSystemIcons.find(i => i.name === iconId)?.data;
    if (!icon) {
      console.warn(`Icon with name "${iconId}" does not exist or is not registered in the module.`);
    }
    return icon;
  }

  const getIcon = (): string => {
    let svgIcon;
    try {
      svgIcon = findIcon(upIcon);
    } catch (error) {
      svgIcon = findIcon(fallback);
    }
    console.log(svgIcon)
    return svgIcon;
  }

  const dimensionStyle = (): string => {
    return height && width ? `width: ${width};height: ${height};` : '';
  }

  return <div style={{ color: color, width: width, height: height }}>{getIcon()}</div>
}

export default Icon
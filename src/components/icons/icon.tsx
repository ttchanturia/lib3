import React, { useEffect, useState } from 'react';
import { UpIconService } from './icon.service';
import { upIcon, UpIcon } from './lib';

export const Icon = (props) => {

  const service = new UpIconService();
  const [upIcon, setUpIcon] = useState<upIcon>(props.upIcon)
  const [fallback, setfallback] = useState<upIcon>(props.fallback)
  const [color, setColor] = useState<string>(props.color)
  const [height, setHeight] = useState<string>(props.height)
  const [width, setWidth] = useState<string>(props.width)



  // color = 'var(--up-brand-1)';


  // width: string;


  // height: string;


  // ngOnChanges(): void {
  //   if (changes.upIcon || changes.color) {
  //     this.setIcon();
  //   }
  // }

  // useEffect(() => {
  //   service.registerIcons([...flagIcons, ...designSystemIcons])
  // }, [])

  const getIcon = (): string => {
    console.log('hey')
    let svgIcon;
    try {
      svgIcon = service.findIcon(upIcon);
    } catch (error) {
      svgIcon = service.findIcon(fallback);
    }
    console.log(svgIcon)
    return svgIcon;
  }

  const dimensionStyle = (): string => {
    return height && width ? `width: ${width};height: ${height};` : '';
  }


  return <div style={{ color: color, width: width, height: height }}>{getIcon()}</div>


  // const setIcon(): void => {
  //   try {
  //     this.renderer.setProperty(
  //       this.el.nativeElement,
  //       'innerHTML',
  //       `<div style="color: ${this.color};${this.dimensionStyle}">${this.getIcon()}</div>`
  //     );
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }


}


export default Icon
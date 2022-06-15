import { Injectable } from '@angular/core';
import { UpIcon } from './lib';

@Injectable()
export class UpIconService {
  svgIcons: Map<string, string> = new Map<string, string>();

  registerIcons(icons: UpIcon[]): void {
    icons.forEach((icon) => this.svgIcons.set(icon.name, icon.data));
  }

  findIcon(iconId: string): string {
    const icon = this.svgIcons.get(iconId);
    if (!icon) {
      console.warn(`Icon with name "${iconId}" does not exist or is not registered in the module.`);
      return '';
    }
    return icon;
  }
}

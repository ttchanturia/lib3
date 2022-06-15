import { UpIcon } from './lib';
import { flagIcons } from './utils/flag-icons';
import { designSystemIcons } from './utils/design-system-icons';

export class UpIconService {
  svgIcons: Map<string, string> = new Map<string, string>();

  registerIcons(icons: UpIcon[]): void {
    icons.forEach((icon) => this.svgIcons.set(icon.name, icon.data));
  }

  findIcon(iconId: string): JSX.Element {
    console.log('iconId', iconId)
    const icon = designSystemIcons.find(i => i.name === iconId)?.data;
    if (!icon) {
      console.warn(`Icon with name "${iconId}" does not exist or is not registered in the module.`);
    }
    return icon;
  }
}

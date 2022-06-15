import { upIcon } from '../../../lib';

export class CountryIconsTemplate {
  countries: string[];

  constructor() { }

  getIconName(icon: string) {
    return upIcon[icon];
  }
}

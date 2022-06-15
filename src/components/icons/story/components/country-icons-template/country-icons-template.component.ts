import { Component, Input } from '@angular/core';
import { upIcon } from '../../../lib';

@Component({
  selector: 'up-country-icons-template',
  styleUrls: ['./country-icons-template.component.sass'],
  templateUrl: './country-icons-template.component.html'
})
export class CountryIconsTemplate {
  @Input() countries: string[];

  constructor() {}

  getIconName(icon: string) {
    return upIcon[icon];
  }
}

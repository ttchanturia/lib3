import { Component, Input } from '@angular/core';
import { DesignSystemIconGroup } from '../../constants/icon-groups';

@Component({
  selector: 'up-icons-groups-template',
  styleUrls: ['./icons-groups-template.component.sass'],
  templateUrl: './icons-groups-template.component.html'
})
export class IconsGroupsTemplate {
  @Input() groups: DesignSystemIconGroup[];

  constructor() {}
}

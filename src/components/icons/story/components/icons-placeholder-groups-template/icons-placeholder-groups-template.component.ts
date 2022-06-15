import { Component, Input } from '@angular/core';
import { DesignSystemIconGroup } from '../../constants/icon-groups';

@Component({
  selector: 'up-icons-groups-placeholder-template',
  styleUrls: ['./icons-placeholder-groups-template.component.sass'],
  templateUrl: './icons-placeholder-groups-template.component.html'
})
export class IconsPlaceholderGroupsTemplateComponent {
  @Input() groups: DesignSystemIconGroup[];

  constructor() {}
}

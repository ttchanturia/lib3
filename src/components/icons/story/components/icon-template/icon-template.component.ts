import { Component, Input } from '@angular/core';
import { UpIcon } from '../../../lib';

@Component({
  selector: 'up-icon-wrapper-component',
  templateUrl: './icon-template.component.html',
  styleUrls: ['./icon-template.component.sass']
})
export class UpIconWrapperComponent {
  @Input()
  upIconType: UpIcon['name'];

  @Input()
  fallback: UpIcon['name'];

  constructor() {}
}

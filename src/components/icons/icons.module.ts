import { NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpIconService } from './icon.service';
import { UpIconDirective } from './icon.directive';
import { flagIcons } from './utils/flag-icons';
import { designSystemIcons } from './utils/design-system-icons';

@NgModule({
  imports: [CommonModule],
  declarations: [UpIconDirective],
  providers: [UpIconService],
  exports: [UpIconDirective]
})
export class UpIconsModule {
  constructor(@Inject(UpIconService) public iconService: UpIconService) {
    this.iconService.registerIcons([...flagIcons, ...designSystemIcons]);
  }
}

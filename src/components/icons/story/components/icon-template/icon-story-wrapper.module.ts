import { NgModule } from '@angular/core';
import { UpIconWrapperComponent } from './icon-template.component';
import { UpIconsModule } from '../../../icons.module';
import { UpTypographyModule } from '../../../../typography/typography.module';

@NgModule({
  imports: [UpIconsModule, UpTypographyModule],
  declarations: [UpIconWrapperComponent],
  exports: [UpIconWrapperComponent]
})
export class IconStoryWrapperModule {}

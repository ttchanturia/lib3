import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  Inject,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { UpIconService } from './icon.service';
import { UpIcon } from './lib';

@Directive({
  selector: '[upIcon]'
})
export class UpIconDirective implements OnChanges {
  @Input()
  upIcon: UpIcon['name'];

  @Input()
  fallback: UpIcon['name'];

  @Input()
  color = 'var(--up-brand-1)';

  @Input()
  width: string;

  @Input()
  height: string;

  constructor(
    @Inject(ElementRef) private el: ElementRef,
    @Inject(UpIconService) private iconService: UpIconService,
    @Inject(Renderer2) private renderer: Renderer2
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.upIcon || changes.color) {
      this.setIcon();
    }
  }

  private getIcon(): string {
    let svgIcon;
    try {
      svgIcon = this.iconService.findIcon(this.upIcon);
    } catch (error) {
      svgIcon = this.iconService.findIcon(this.fallback);
    }
    return svgIcon;
  }

  private setIcon(): void {
    try {
      this.renderer.setProperty(
        this.el.nativeElement,
        'innerHTML',
        `<div style="color: ${this.color};${this.dimensionStyle}">${this.getIcon()}</div>`
      );
    } catch (error) {
      console.error(error.message);
    }
  }

  private get dimensionStyle(): string {
    return this.height && this.width ? `width: ${this.width};height: ${this.height};` : '';
  }
}

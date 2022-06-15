import { Component, DebugElement, NO_ERRORS_SCHEMA, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UpIconsModule } from './icons.module';
import { UpIconDirective } from './icon.directive';
import { upIconBe, upIconRo } from './lib';

@Component({
  template: `
    <i upIcon="be"></i>
    <i upIcon="not_found_icon" fallback="ro"></i>
    <i upIcon="not_found_icon" fallback="not_found_icon_2"></i>
    <i upIcon="be" [color]="color"></i>
    <i upIcon="be" color="red" width="14px" height="14px"></i>
  `
})
class UpIconDirectiveWrapperComponent {
  color = 'red';
}

describe('UpIconDirective', () => {
  let fixture: ComponentFixture<UpIconDirectiveWrapperComponent>;
  let component: UpIconDirectiveWrapperComponent;
  let spyConsole;
  let spyWarningConsole;

  let directiveElements: DebugElement[];

  beforeEach(() => {
    spyConsole = jest.spyOn(console, 'error').mockImplementation(() => {});
    spyWarningConsole = jest.spyOn(console, 'warn').mockImplementation(() => {});
    fixture = TestBed.configureTestingModule({
      declarations: [UpIconDirectiveWrapperComponent],
      providers: [Renderer2],
      imports: [UpIconsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).createComponent(UpIconDirectiveWrapperComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();

    directiveElements = fixture.debugElement.queryAll(By.directive(UpIconDirective));
  });

  afterEach(() => {
    spyConsole.mockRestore();
    spyWarningConsole.mockRestore();
  });

  it('should have 5 <i> elements', () => {
    expect(directiveElements.length).toBe(5);
  });

  it('should have the BE icon svg for the first item', () => {
    expect(directiveElements[0].properties.innerHTML).toEqual(
      `<div style="color: var(--up-brand-1);">${upIconBe.data}</div>`
    );
  });

  it('should have the RO icon svg for the second item', () => {
    expect(directiveElements[1].properties.innerHTML).toEqual(
      `<div style="color: var(--up-brand-1);"></div>`
    );
  });

  it('should log the error for the missing icon: not_found_icon_2', () => {
    expect(spyWarningConsole.mock.calls).toEqual([
      [`Icon with name \"not_found_icon\" does not exist or is not registered in the module.`],
      [`Icon with name \"not_found_icon\" does not exist or is not registered in the module.`]
    ]);
  });

  it('should log the error once', () => {
    expect(spyWarningConsole).toHaveBeenCalledTimes(2);
  });

  it('should add the passed color input to the div inline color', () => {
    expect(directiveElements[3].properties.innerHTML).toEqual(
      `<div style="color: red;">${upIconBe.data}</div>`
    );
  });

  it('should set the passed width and height', () => {
    expect(directiveElements[4].properties.innerHTML).toEqual(
      `<div style="color: red;width: 14px;height: 14px;">${upIconBe.data}</div>`
    );
  });

  it('should update the element when the color changes', () => {
    expect(directiveElements[3].properties.innerHTML).toEqual(
      `<div style="color: red;">${upIconBe.data}</div>`
    );
    component.color = 'blue';
    fixture.detectChanges();
    expect(directiveElements[3].properties.innerHTML).toEqual(
      `<div style="color: blue;">${upIconBe.data}</div>`
    );
  });
});

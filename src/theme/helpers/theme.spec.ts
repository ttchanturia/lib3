import { applyDesignSystemTheme } from './theme';
import {
  BackgroundColorNames,
  Brand1VariantsColorNames,
  Brand3VariantsColorNames,
  BrandColorNames,
  ChoiceSelectorsColorNames,
  GraphicsColorNames,
  IconColorNames,
  InputColorNames,
  NavigationSidebarColorNames,
  NegativeVariantsColorNames,
  NeutralVariantsColorNames,
  PositiveVariantsColorNames,
  SpacingVariableNames,
  TextColorNames,
  WarningVariantsColorNames
} from '../enums';
import { DefaultNeutralVariants } from '../defaults/neutrals-variants';
import { DefaultPositiveVariants } from '../defaults/positive-variants';
import { DefaultWarningVariants } from '../defaults/warning-variants';
import { DefaultNegativeVariants } from '../defaults/negative-variants';

import tinycolor from 'tinycolor2';
import { DesignSystemThemeParameters } from '../interfaces';
import { DefaultSpacingConfiguration } from '../defaults/spacing-configuration';

const root: HTMLElement = document.querySelector(':root')!;
const getVariable = (variableName: string) => root.style.getPropertyValue(`--${variableName}`);

const generateColorVariantsTests = (colorEnum: any, defaults: any) => {
  beforeEach(() => {
    applyDesignSystemTheme({} as DesignSystemThemeParameters);
  });

  Object.keys(colorEnum).forEach((key) => {
    it(`should set the default value for ${key} variable`, () => {
      const variableName = colorEnum[key];
      expect(getVariable(variableName)).toEqual(defaults[variableName]);
    });
  });

  Object.keys(colorEnum).forEach((key) => {
    const randomColor = `#${tinycolor.random().toHex()}`;

    it(`should set ${randomColor} value for ${key} variable`, () => {
      const variableName = colorEnum[key];
      applyDesignSystemTheme({ [variableName]: randomColor } as DesignSystemThemeParameters);
      expect(getVariable(variableName)).toEqual(randomColor);
    });
  });
};

const testVariableMapping = ({ variable, defaultMapping }) => {
  const randomColor = `#${tinycolor.random().toHex()}`;

  it(`should set the ${variable} variable with default value from ${defaultMapping}`, () => {
    applyDesignSystemTheme({} as DesignSystemThemeParameters);
    expect(getVariable(variable)).toEqual(getVariable(defaultMapping));
  });

  it(`should set the ${variable} variable to ${randomColor}`, () => {
    applyDesignSystemTheme({ [variable]: randomColor } as DesignSystemThemeParameters);
    expect(getVariable(variable)).toEqual(randomColor);
  });
};

describe('applyDesignSystemTheme() ', () => {
  describe('brand colors > ', () => {
    beforeEach(() => {
      applyDesignSystemTheme({
        [BrandColorNames.upBrand1]: '#111111',
        [BrandColorNames.upBrand2]: '#222222',
        [BrandColorNames.upBrand3]: '#333333'
      });
    });

    it('should set the brand 1 color', () => {
      expect(getVariable(BrandColorNames.upBrand1)).toEqual('#111111');
    });

    it('should set the brand 2 color', () => {
      expect(getVariable(BrandColorNames.upBrand2)).toEqual('#222222');
    });

    it('should set the brand 2 from brand-1-900 overwritten', () => {
      applyDesignSystemTheme({
        [Brand1VariantsColorNames.upBrand1_900]: '#777777'
      } as DesignSystemThemeParameters);
      expect(getVariable(BrandColorNames.upBrand2)).toEqual('#777777');
    });

    it('should set the brand 3 color', () => {
      expect(getVariable(BrandColorNames.upBrand3)).toEqual('#333333');
    });
  });

  describe('brand1 variants > ', () => {
    beforeEach(() => {
      applyDesignSystemTheme({
        [BrandColorNames.upBrand1]: '#e51d1d'
      } as DesignSystemThemeParameters);
    });

    [
      { variable: Brand1VariantsColorNames.upBrand1_50, value: '#fce4e4' },
      { variable: Brand1VariantsColorNames.upBrand1_100, value: '#f7bbbb' },
      { variable: Brand1VariantsColorNames.upBrand1_200, value: '#f28e8e' },
      { variable: Brand1VariantsColorNames.upBrand1_300, value: '#ed6161' },
      { variable: Brand1VariantsColorNames.upBrand1_400, value: '#e93f3f' },
      { variable: Brand1VariantsColorNames.upBrand1_500, value: '#e51d1d' },
      { variable: Brand1VariantsColorNames.upBrand1_600, value: '#e21a1a' },
      { variable: Brand1VariantsColorNames.upBrand1_700, value: '#de1515' },
      { variable: Brand1VariantsColorNames.upBrand1_800, value: '#da1111' },
      { variable: Brand1VariantsColorNames.upBrand1_900, value: '#d30a0a' }
    ].forEach(({ variable, value }) => {
      it(`should generate ${variable} variable`, () => {
        expect(getVariable(variable)).toEqual(value);
      });
    });
  });

  describe('brand3 variants > ', () => {
    beforeEach(() => {
      applyDesignSystemTheme({
        [BrandColorNames.upBrand3]: '#0cb4a5'
      } as DesignSystemThemeParameters);
    });

    [
      { variable: Brand3VariantsColorNames.upBrand3_50, value: '#e2f6f4' },
      { variable: Brand3VariantsColorNames.upBrand3_100, value: '#b6e9e4' },
      { variable: Brand3VariantsColorNames.upBrand3_200, value: '#86dad2' },
      { variable: Brand3VariantsColorNames.upBrand3_300, value: '#55cbc0' },
      { variable: Brand3VariantsColorNames.upBrand3_400, value: '#30bfb3' },
      { variable: Brand3VariantsColorNames.upBrand3_500, value: '#0cb4a5' },
      { variable: Brand3VariantsColorNames.upBrand3_600, value: '#0aad9d' },
      { variable: Brand3VariantsColorNames.upBrand3_700, value: '#08a493' },
      { variable: Brand3VariantsColorNames.upBrand3_800, value: '#069c8a' },
      { variable: Brand3VariantsColorNames.upBrand3_900, value: '#038c79' }
    ].forEach(({ variable, value }) => {
      it(`should generate ${variable} variable`, () => {
        expect(getVariable(variable)).toEqual(value);
      });
    });
  });

  describe('neutral variants > ', () => {
    generateColorVariantsTests(NeutralVariantsColorNames, DefaultNeutralVariants);
  });

  describe('positive variants > ', () => {
    generateColorVariantsTests(PositiveVariantsColorNames, DefaultPositiveVariants);
  });

  describe('warning variants > ', () => {
    generateColorVariantsTests(WarningVariantsColorNames, DefaultWarningVariants);
  });

  describe('negative variants > ', () => {
    generateColorVariantsTests(NegativeVariantsColorNames, DefaultNegativeVariants);
  });

  describe('spacing variables', () => {
    const variableName = SpacingVariableNames.baseUnit;

    beforeEach(() => {
      applyDesignSystemTheme({} as DesignSystemThemeParameters);
    });

    it(`should set the default value for ${variableName} variable`, () => {
      expect(getVariable(variableName)).toEqual(DefaultSpacingConfiguration[variableName]);
    });

    it(`should set new value for ${variableName} variable`, () => {
      const newValue = '6px';
      applyDesignSystemTheme({ [variableName]: newValue } as DesignSystemThemeParameters);
      expect(getVariable(variableName)).toEqual(newValue);
    });
  });

  describe('text color variables > ', () => {
    [
      {
        variable: TextColorNames.upCoreTxt,
        defaultMapping: NeutralVariantsColorNames.upNeutral_900
      },
      {
        variable: TextColorNames.upDeemphasisedTxt1,
        defaultMapping: NeutralVariantsColorNames.upNeutral_700
      },
      {
        variable: TextColorNames.upDeemphasisedTxt2,
        defaultMapping: NeutralVariantsColorNames.upNeutral_500
      },
      {
        variable: TextColorNames.upCoreTxtInverted,
        defaultMapping: NeutralVariantsColorNames.upWhite
      },
      {
        variable: TextColorNames.upDeemphasisedTxtInverted1,
        defaultMapping: Brand1VariantsColorNames.upBrand1_200
      },
      {
        variable: TextColorNames.upDeemphasisedTxtInverted2,
        defaultMapping: Brand1VariantsColorNames.upBrand1_400
      }
    ].forEach(testVariableMapping);
  });

  describe('input color variables > ', () => {
    [
      {
        variable: InputColorNames.upInputLabel,
        defaultMapping: NeutralVariantsColorNames.upNeutral_900
      },
      {
        variable: InputColorNames.upInputLabelFocus,
        defaultMapping: Brand1VariantsColorNames.upBrand1_700
      },
      {
        variable: InputColorNames.upInputLabelHover,
        defaultMapping: NeutralVariantsColorNames.upNeutral_900
      },
      {
        variable: InputColorNames.upInputFocus,
        defaultMapping: Brand1VariantsColorNames.upBrand1_500
      },
      {
        variable: InputColorNames.upInputPlaceholder,
        defaultMapping: NeutralVariantsColorNames.upNeutral_700
      },
      {
        variable: InputColorNames.upInputTxt,
        defaultMapping: NeutralVariantsColorNames.upNeutral_900
      },
      {
        variable: InputColorNames.upInputTxtDisabled,
        defaultMapping: NeutralVariantsColorNames.upNeutral_700
      },
      {
        variable: InputColorNames.upInputHelperTxt,
        defaultMapping: NeutralVariantsColorNames.upNeutral_700
      },
      {
        variable: InputColorNames.upInputHoverBorder,
        defaultMapping: NeutralVariantsColorNames.upNeutral_900
      },
      {
        variable: InputColorNames.upInputHelperTxtError,
        defaultMapping: NegativeVariantsColorNames.upNegative_700
      },
      {
        variable: InputColorNames.upInputBorder,
        defaultMapping: NeutralVariantsColorNames.upNeutral_400
      },
      {
        variable: InputColorNames.upInputBorderHover,
        defaultMapping: Brand3VariantsColorNames.upBrand3_400
      },
      {
        variable: InputColorNames.upInputBorderFocus,
        defaultMapping: Brand1VariantsColorNames.upBrand1_200
      },
      {
        variable: InputColorNames.upInputBorderError,
        defaultMapping: NegativeVariantsColorNames.upNegative_400
      },
      {
        variable: InputColorNames.upInputBorderWarning,
        defaultMapping: WarningVariantsColorNames.upWarning_400
      },
      {
        variable: InputColorNames.upInputDisabled,
        defaultMapping: NeutralVariantsColorNames.upNeutral_400
      },
      { variable: InputColorNames.upCaret, defaultMapping: Brand3VariantsColorNames.upBrand3_400 },
      {
        variable: InputColorNames.upInputWarningTxtError,
        defaultMapping: WarningVariantsColorNames.upWarning_700
      }
    ].forEach(testVariableMapping);
  });

  describe('choice selector color variables > ', () => {
    [
      {
        variable: ChoiceSelectorsColorNames.upChoiceSelectorLabel,
        defaultMapping: NeutralVariantsColorNames.upNeutral_900
      },
      {
        variable: ChoiceSelectorsColorNames.upChoiceSelectorLabelDisabled,
        defaultMapping: NeutralVariantsColorNames.upNeutral_700
      },
      {
        variable: ChoiceSelectorsColorNames.upChoiceSelector,
        defaultMapping: Brand1VariantsColorNames.upBrand1_500
      },
      {
        variable: ChoiceSelectorsColorNames.upChoiceSelectorReadonly,
        defaultMapping: NeutralVariantsColorNames.upNeutral_500
      },
      {
        variable: ChoiceSelectorsColorNames.upSwitchThumbOn,
        defaultMapping: Brand1VariantsColorNames.upBrand1_500
      },
      {
        variable: ChoiceSelectorsColorNames.upSwitchTrackOn,
        defaultMapping: Brand1VariantsColorNames.upBrand1_200
      },
      {
        variable: ChoiceSelectorsColorNames.upSwitchThumbOff,
        defaultMapping: NeutralVariantsColorNames.upNeutral_900
      },
      {
        variable: ChoiceSelectorsColorNames.upSwitchTrackOff,
        defaultMapping: NeutralVariantsColorNames.upNeutral_500
      },
      {
        variable: ChoiceSelectorsColorNames.upSwitchThumbDisabled,
        defaultMapping: NeutralVariantsColorNames.upNeutral_500
      },
      {
        variable: ChoiceSelectorsColorNames.upSwitchTrackDisabled,
        defaultMapping: NeutralVariantsColorNames.upNeutral_400
      }
    ].forEach(testVariableMapping);
  });

  describe('background color variables > ', () => {
    [
      { variable: BackgroundColorNames.upBg, defaultMapping: NeutralVariantsColorNames.upWhite },
      { variable: BackgroundColorNames.upBgDark, defaultMapping: BrandColorNames.upBrand2 },
      {
        variable: BackgroundColorNames.upBgDarkOffset1,
        defaultMapping: Brand1VariantsColorNames.upBrand1_600
      },
      {
        variable: BackgroundColorNames.upBgDarkOffset2,
        defaultMapping: Brand1VariantsColorNames.upBrand1_400
      },
      {
        variable: BackgroundColorNames.upBgDarkOffset3,
        defaultMapping: Brand1VariantsColorNames.upBrand1_200
      }
    ].forEach(testVariableMapping);
  });

  describe('graphic color variables > ', () => {
    [
      {
        variable: GraphicsColorNames.upDividerDark,
        defaultMapping: Brand1VariantsColorNames.upBrand1_400
      }
    ].forEach(testVariableMapping);
  });

  describe('icon color variables > ', () => {
    [
      { variable: IconColorNames.upIc, defaultMapping: NeutralVariantsColorNames.upNeutral_900 },
      {
        variable: IconColorNames.upIcDeemphasised,
        defaultMapping: NeutralVariantsColorNames.upNeutral_700
      },
      {
        variable: IconColorNames.upIcDestructive,
        defaultMapping: NegativeVariantsColorNames.upNegative_400
      }
    ].forEach(testVariableMapping);
  });

  describe('navigation sidebar color variables > ', () => {
    [
      {
        variable: NavigationSidebarColorNames.upNavLink,
        defaultMapping: Brand1VariantsColorNames.upBrand1_200
      },
      {
        variable: NavigationSidebarColorNames.upNavLinkHover,
        defaultMapping: Brand3VariantsColorNames.upBrand3_400
      },
      {
        variable: NavigationSidebarColorNames.upNavLinkActive,
        defaultMapping: NeutralVariantsColorNames.upWhite
      },
      {
        variable: NavigationSidebarColorNames.upNavLinkBgActive,
        defaultMapping: Brand1VariantsColorNames.upBrand1_600
      }
    ].forEach(testVariableMapping);
  });
});

import tinycolor from 'tinycolor2';

import {
  ThemeColorsObject,
  ColorVariant,
  HexColor,
  RgbColor,
  ThemeBrand1VariantsColors,
  ThemeBrand3VariantsColors,
  ThemeTextColors,
  ThemeInputColors,
  ThemeChoiceSelectorColors,
  ThemeBackgroundColors,
  ThemeGraphicsColors,
  ThemeIconColors,
  ThemeNavigationSidebarColors,
  DesignSystemThemeParameters
} from '../interfaces';
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
  TextColorNames,
  WarningVariantsColorNames
} from '../enums';
import { DefaultNegativeVariants } from '../defaults/negative-variants';
import { DefaultNeutralVariants } from '../defaults/neutrals-variants';
import { DefaultWarningVariants } from '../defaults/warning-variants';
import { DefaultPositiveVariants } from '../defaults/positive-variants';
import { setCSS3Variables } from '../../helpers/css3';
import { DefaultSpacingConfiguration } from '../defaults/spacing-configuration';

export const applyDesignSystemTheme = (
  overrides: DesignSystemThemeParameters
): ThemeColorsObject => {
  const theme = computeColors(overrides);

  setCSS3Variables(theme);

  return theme;
};

export const computeColors = (overrides: Partial<ThemeColorsObject> = {}): ThemeColorsObject => {
  const brand1 = overrides[BrandColorNames.upBrand1];
  const brand3 = overrides[BrandColorNames.upBrand3];

  const brand1Variants = generateBrand1Variants(brand1);
  const brand3Variants = generateBrand3Variants(brand3);

  const brand2 =
    overrides[BrandColorNames.upBrand2] ||
    overrides[Brand1VariantsColorNames.upBrand1_900] ||
    brand1Variants[Brand1VariantsColorNames.upBrand1_900];

  const theme = {
    [BrandColorNames.upBrand1]: brand1,
    [BrandColorNames.upBrand2]: brand2,
    [BrandColorNames.upBrand3]: brand3,
    ...brand1Variants,
    ...brand3Variants,
    ...DefaultNegativeVariants,
    ...DefaultNeutralVariants,
    ...DefaultWarningVariants,
    ...DefaultPositiveVariants,
    ...DefaultSpacingConfiguration
  };

  return {
    ...theme,
    ...generateTextColors(theme),
    ...generateChoiceSelectorsColors(theme),
    ...generateInputColors(theme),
    ...generateBackgroundColors(theme),
    ...generateGraphicsColors(theme),
    ...generateIconColors(theme),
    ...generateNavigationSidebarColors(theme),
    ...overrides
  };
};

const generateBrand1Variants = (color: HexColor): ThemeBrand1VariantsColors => {
  return generateColorVariants(color, BrandColorNames.upBrand1) as ThemeBrand1VariantsColors;
};

const generateBrand3Variants = (color: HexColor): ThemeBrand3VariantsColors => {
  return generateColorVariants(color, BrandColorNames.upBrand3) as ThemeBrand3VariantsColors;
};

const generateColorVariants = (
  color: HexColor,
  prefix: BrandColorNames
): Partial<ThemeColorsObject> => {
  const baseLight = tinycolor('#fff');
  const baseDark = getBaseDark(tinycolor(color).toRgb());

  return {
    [generateColorVariantKey(prefix, 50)]: `#${tinycolor.mix(baseLight, color, 12).toHex()}`,
    [generateColorVariantKey(prefix, 100)]: `#${tinycolor.mix(baseLight, color, 30).toHex()}`,
    [generateColorVariantKey(prefix, 200)]: `#${tinycolor.mix(baseLight, color, 50).toHex()}`,
    [generateColorVariantKey(prefix, 300)]: `#${tinycolor.mix(baseLight, color, 70).toHex()}`,
    [generateColorVariantKey(prefix, 400)]: `#${tinycolor.mix(baseLight, color, 85).toHex()}`,
    [generateColorVariantKey(prefix, 500)]: `#${tinycolor.mix(baseLight, color, 100).toHex()}`,
    [generateColorVariantKey(prefix, 600)]: `#${tinycolor.mix(baseDark, color, 87).toHex()}`,
    [generateColorVariantKey(prefix, 700)]: `#${tinycolor.mix(baseDark, color, 70).toHex()}`,
    [generateColorVariantKey(prefix, 800)]: `#${tinycolor.mix(baseDark, color, 54).toHex()}`,
    [generateColorVariantKey(prefix, 900)]: `#${tinycolor.mix(baseDark, color, 25).toHex()}`
  } as Partial<ThemeColorsObject>;
};

const generateTextColors = (theme: Partial<ThemeColorsObject>): ThemeTextColors => {
  return {
    [TextColorNames.upCoreTxt]: theme[NeutralVariantsColorNames.upNeutral_900],
    [TextColorNames.upDeemphasisedTxt1]: theme[NeutralVariantsColorNames.upNeutral_700],
    [TextColorNames.upDeemphasisedTxt2]: theme[NeutralVariantsColorNames.upNeutral_500],
    [TextColorNames.upCoreTxtInverted]: theme[NeutralVariantsColorNames.upWhite],
    [TextColorNames.upDeemphasisedTxtInverted1]: theme[Brand1VariantsColorNames.upBrand1_200],
    [TextColorNames.upDeemphasisedTxtInverted2]: theme[Brand1VariantsColorNames.upBrand1_400]
  };
};

const generateInputColors = (theme: Partial<ThemeColorsObject>): ThemeInputColors => {
  return {
    [InputColorNames.upInputLabel]: theme[NeutralVariantsColorNames.upNeutral_900],
    [InputColorNames.upInputLabelFocus]: theme[Brand1VariantsColorNames.upBrand1_700],
    [InputColorNames.upInputLabelHover]: theme[NeutralVariantsColorNames.upNeutral_900],
    [InputColorNames.upInputFocus]: theme[Brand1VariantsColorNames.upBrand1_500],
    [InputColorNames.upInputPlaceholder]: theme[NeutralVariantsColorNames.upNeutral_700],
    [InputColorNames.upInputTxt]: theme[NeutralVariantsColorNames.upNeutral_900],
    [InputColorNames.upInputTxtDisabled]: theme[NeutralVariantsColorNames.upNeutral_700],
    [InputColorNames.upInputHelperTxt]: theme[NeutralVariantsColorNames.upNeutral_700],
    [InputColorNames.upInputHoverBorder]: theme[NeutralVariantsColorNames.upNeutral_900],
    [InputColorNames.upInputHelperTxtError]: theme[NegativeVariantsColorNames.upNegative_700],
    [InputColorNames.upInputBorder]: theme[NeutralVariantsColorNames.upNeutral_400],
    [InputColorNames.upInputBorderHover]: theme[Brand3VariantsColorNames.upBrand3_400],
    [InputColorNames.upInputBorderFocus]: theme[Brand1VariantsColorNames.upBrand1_200],
    [InputColorNames.upInputBorderError]: theme[NegativeVariantsColorNames.upNegative_400],
    [InputColorNames.upInputBorderWarning]: theme[WarningVariantsColorNames.upWarning_400],
    [InputColorNames.upInputDisabled]: theme[NeutralVariantsColorNames.upNeutral_400],
    [InputColorNames.upCaret]: theme[Brand3VariantsColorNames.upBrand3_400],
    [InputColorNames.upInputWarningTxtError]: theme[WarningVariantsColorNames.upWarning_700]
  };
};

const generateChoiceSelectorsColors = (
  theme: Partial<ThemeColorsObject>
): ThemeChoiceSelectorColors => {
  return {
    [ChoiceSelectorsColorNames.upChoiceSelectorLabel]:
      theme[NeutralVariantsColorNames.upNeutral_900],
    [ChoiceSelectorsColorNames.upChoiceSelectorLabelDisabled]:
      theme[NeutralVariantsColorNames.upNeutral_700],
    [ChoiceSelectorsColorNames.upChoiceSelector]: theme[Brand1VariantsColorNames.upBrand1_500],
    [ChoiceSelectorsColorNames.upChoiceSelectorReadonly]:
      theme[NeutralVariantsColorNames.upNeutral_500],
    [ChoiceSelectorsColorNames.upSwitchThumbOn]: theme[Brand1VariantsColorNames.upBrand1_500],
    [ChoiceSelectorsColorNames.upSwitchTrackOn]: theme[Brand1VariantsColorNames.upBrand1_200],
    [ChoiceSelectorsColorNames.upSwitchThumbOff]: theme[NeutralVariantsColorNames.upNeutral_900],
    [ChoiceSelectorsColorNames.upSwitchTrackOff]: theme[NeutralVariantsColorNames.upNeutral_500],
    [ChoiceSelectorsColorNames.upSwitchThumbDisabled]:
      theme[NeutralVariantsColorNames.upNeutral_500],
    [ChoiceSelectorsColorNames.upSwitchTrackDisabled]:
      theme[NeutralVariantsColorNames.upNeutral_400]
  };
};

const generateBackgroundColors = (theme: Partial<ThemeColorsObject>): ThemeBackgroundColors => {
  return {
    [BackgroundColorNames.upBg]: theme[NeutralVariantsColorNames.upWhite],
    [BackgroundColorNames.upBgDark]: theme[BrandColorNames.upBrand2],
    [BackgroundColorNames.upBgDarkOffset1]: theme[Brand1VariantsColorNames.upBrand1_600],
    [BackgroundColorNames.upBgDarkOffset2]: theme[Brand1VariantsColorNames.upBrand1_400],
    [BackgroundColorNames.upBgDarkOffset3]: theme[Brand1VariantsColorNames.upBrand1_200]
  };
};

const generateGraphicsColors = (theme: Partial<ThemeColorsObject>): ThemeGraphicsColors => {
  return {
    [GraphicsColorNames.upDividerDark]: theme[Brand1VariantsColorNames.upBrand1_400]
  };
};

const generateIconColors = (theme: Partial<ThemeColorsObject>): ThemeIconColors => {
  return {
    [IconColorNames.upIc]: theme[NeutralVariantsColorNames.upNeutral_900],
    [IconColorNames.upIcDeemphasised]: theme[NeutralVariantsColorNames.upNeutral_700],
    [IconColorNames.upIcDestructive]: theme[NegativeVariantsColorNames.upNegative_400]
  };
};

const generateNavigationSidebarColors = (
  theme: Partial<ThemeColorsObject>
): ThemeNavigationSidebarColors => {
  return {
    [NavigationSidebarColorNames.upNavLink]: theme[Brand1VariantsColorNames.upBrand1_200],
    [NavigationSidebarColorNames.upNavLinkHover]: theme[Brand3VariantsColorNames.upBrand3_400],
    [NavigationSidebarColorNames.upNavLinkActive]: theme[NeutralVariantsColorNames.upWhite],
    [NavigationSidebarColorNames.upNavLinkBgActive]: theme[Brand1VariantsColorNames.upBrand1_600]
  };
};

const generateColorVariantKey = (color: BrandColorNames, variant: ColorVariant) => {
  return `${color}-${variant}`;
};

const getBaseDark = (color: RgbColor) => {
  const b = Math.floor((color.b * color.b) / 255);
  const r = Math.floor((color.r * color.r) / 255);
  const g = Math.floor((color.g * color.g) / 255);
  return tinycolor({ r, g, b });
};

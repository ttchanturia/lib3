import { SpacingVariableNames } from '../enums';
import { PixelValue } from './pixel-value.interface';

export interface SpacingConfiguration {
  [SpacingVariableNames.baseUnit]: PixelValue;
}

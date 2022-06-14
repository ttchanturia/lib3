import react, { useEffect, useState } from 'react';
import { HexColor } from './theme/interfaces';

import { applyDesignSystemTheme } from './theme/helpers/theme';
import { BrandColorNames } from './theme/enums';

import tinycolor from 'tinycolor2';

export interface IColorMeta {
    variableName: string;
    name: string;
    title: string;
    description: string;
    hex?: string;
    rgb?: string;
}

const Init = () => {
    //const [brand1, setBrand1] = useState<HexColor>()

    let brand1: HexColor
    let brand3: HexColor
    let colors: IColorMeta[] = []


    const computeColors = () => {
        for (let color of colors) {
            color.hex = getHexCode(color.variableName);
            color.rgb = getRgba(color.variableName);
        }
    }

    const hasBrandColors = () => {
        return brand1 && brand3;
    }

    const updateCSS3Variables = (): void => {
        applyDesignSystemTheme({
            [BrandColorNames.upBrand1]: brand1,
            [BrandColorNames.upBrand3]: brand3
        });
        computeColors();
    }

    const getHexCode = (variableName: string): string => {
        return getComputedStyle(document.documentElement).getPropertyValue(variableName);
    }

    const getRgba = (variableName: string): string => {
        const hex = getComputedStyle(document.documentElement).getPropertyValue(variableName);
        return tinycolor(hex).toRgbString();
    }

    useEffect(() => {
        computeColors();
        if (hasBrandColors) {
            updateCSS3Variables();
        }
        console.log('init colors')
    }, [])

};

export default Init
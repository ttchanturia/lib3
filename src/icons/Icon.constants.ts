import * as Icons from './index'

const iconArray = Object.values(Icons)

const IconTypes = {}

iconArray.map(icon => IconTypes[icon.name] = icon)

console.log(IconTypes)

const icont1 = '';

iconArray.map(icon => icont1 + icon + ' | ')


export const IconTypess = {

} as const;

iconArray.map(icon => IconTypess[icon.name] = icon.name)

console.log(IconTypess)

export default IconTypes;

export type IconType = typeof IconTypess[keyof typeof IconTypess]

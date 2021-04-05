import {kebabCase} from 'lodash';
export const getStyles = (varProps: { [s: string]: unknown; } | ArrayLike<unknown>) => 
  Object.entries(varProps).map(([key, value]) => 
    `--${kebabCase(key)}: ${value}`
  ).join(';')
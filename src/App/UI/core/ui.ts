import styled from 'styled-components';
import {getStyles} from './helpers';
import * as I from '@ionic/react';
import * as Types from './types';


interface IIon {
  styles?: Types.IonButtonStyles
}

export interface IButton extends IIon {
  children: any
}

export const Button = styled(I.IonButton)<IButton>`
  ${({styles}) => getStyles(styles!)};
`;
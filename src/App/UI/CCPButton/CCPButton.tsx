import React from 'react';
import {Button} from '../core/ui';
import * as T from '../core/types';
export interface ICCPButton {
    children: any
}



export const CCPButton = ({children}: ICCPButton ) => {
    const CCPButtonStyles:T.IonButtonStyles = {
        background: 'purple',
        borderColor: 'black',
        borderWidth: '1px',
        borderStyle: 'solid',
    }
    return <Button styles={CCPButtonStyles}>{children}</Button>
}
import React from 'react';
import {IonWrapper} from '../src/App/core/IonWrapper';
import {addDecorator} from "@storybook/react";
import {IonContent, IonPage} from "@ionic/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator((storyFn) => <IonWrapper><IonPage><IonContent>{storyFn()}</IonContent></IonPage></IonWrapper>);
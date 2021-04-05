import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CCPButton, ICCPButton } from './CCPButton';

export default {
  title: 'Composed/CCPButton',
  component: CCPButton,
  argTypes: {
    // background: { control: 'color' },
  },
} as Meta;

const Template: Story<ICCPButton> = (args) => <CCPButton {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  children: 'Button',
};
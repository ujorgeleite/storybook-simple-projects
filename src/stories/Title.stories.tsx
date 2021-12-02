import React from 'react';
import { action } from '@storybook/addon-actions';
import { Title } from "../components";
import type { Story, Meta } from '@storybook/react';
import type { ComponentProps } from 'react';

type Args = ComponentProps<typeof Title>;

export default {
  title: 'components/Title',
  component: Title,
  argTypes: {
    fontColor: {
      options: ['red'],
      control: { type: 'text' },
    },
  },
  args:{
    primary: false
  }
} as Meta<Args>;


export const _TitleComponent: Story<Args> = (args) => (
  <Title {...args}>Title Component </Title>
);
_TitleComponent.storyName = 'Title';
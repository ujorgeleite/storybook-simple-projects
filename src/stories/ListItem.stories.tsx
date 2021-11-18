import React from 'react';
import { action } from '@storybook/addon-actions';
import { ListItem } from "../components/ListItem";

export default {
  title: 'ListItem',
  component: ListItem,
};


export const Default = () => <ListItem onClick={action('clicked')}>Default Button</ListItem>;


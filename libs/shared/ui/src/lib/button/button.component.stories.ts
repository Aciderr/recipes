import type { Meta, StoryObj } from '@storybook/angular';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Button',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const BlueBackground: Story = {
  args: {
    backgroundColor: 'blue',
    text: 'Create task'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Create task').style.backgroundColor).toBe('blue');
  }
};

export const RedBackground: Story = {
  args: {
    backgroundColor: 'red',
    text: 'Create task'
  },
};

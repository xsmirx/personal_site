import {Meta, StoryObj} from '@storybook/react'
import {Button} from './Button'

const meta = {
  title: 'UI Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
    variant: {
      description: 'What variant should the button be?',
    },
    size: {
      description: 'How large should the button be?',
    },
    disabled: {control: 'boolean'},
    children: {
      control: 'text',
      description: 'Button text',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    children: 'I',
  },
}

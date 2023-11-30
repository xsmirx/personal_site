import {Meta, StoryObj} from '@storybook/react'
import NextLink from 'next/link'
import {linkVariants} from '.'

const meta: Meta<typeof NextLink> = {
  title: 'UI Components/Link',
  args: {
    href: '/',
    children: 'Link',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Link: Story = {
  render: args => {
    return (
      <NextLink href={args.href} className={linkVariants()}>
        {args.children}
      </NextLink>
    )
  },
}

import {Meta, StoryObj} from '@storybook/react'
import {textVariants} from '.'

const meta: Meta = {
  title: 'UI Components/Typography',
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Typography: Story = {
  render: args => {
    return (
      <>
        <div>
          hero
          <p className={textVariants({variant: 'hero'})}>{args.children}</p>
        </div>
        <div>
          h1
          <p className={textVariants({variant: 'h1'})}>{args.children}</p>
        </div>
        <div>
          h1_bold
          <p className={textVariants({variant: 'h1_bold'})}>{args.children}</p>
        </div>
        <div>
          h2
          <p className={textVariants({variant: 'h2'})}>{args.children}</p>
        </div>
        <div>
          h2_bold
          <p className={textVariants({variant: 'h2_bold'})}>{args.children}</p>
        </div>
        <div>
          h3
          <p className={textVariants({variant: 'h3'})}>{args.children}</p>
        </div>
        <div>
          h3_bold
          <p className={textVariants({variant: 'h3_bold'})}>{args.children}</p>
        </div>
        <div>
          body1
          <p className={textVariants({variant: 'body1'})}>{args.children}</p>
        </div>
        <div>
          body1_bold
          <p className={textVariants({variant: 'body1_bold'})}>
            {args.children}
          </p>
        </div>
        <div>
          body2
          <p className={textVariants({variant: 'body2'})}>{args.children}</p>
        </div>
        <div>
          body2_bold
          <p className={textVariants({variant: 'body2_bold'})}>
            {args.children}
          </p>
        </div>
        <div>
          caption1
          <p className={textVariants({variant: 'caption1'})}>{args.children}</p>
        </div>
        <div>
          caption1_bold
          <p className={textVariants({variant: 'caption1_bold'})}>
            {args.children}
          </p>
        </div>
        <div>
          caption2
          <p className={textVariants({variant: 'caption2'})}>{args.children}</p>
        </div>
        <div>
          caption2_bold
          <p className={textVariants({variant: 'caption2_bold'})}>
            {args.children}
          </p>
        </div>
        <div>
          hairline1
          <p className={textVariants({variant: 'hairline1'})}>
            {args.children}
          </p>
        </div>
      </>
    )
  },
}

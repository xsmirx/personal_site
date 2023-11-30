import {cva} from 'class-variance-authority'

export const textVariants = cva('text-gray-darker dark:text-gray-lighter', {
  variants: {
    variant: {
      hero: 'font-heading font-semibold text-5xl',
      h1_bold: 'font-heading font-medium text-4xl',
      h1: 'font-heading font-normal text-4xl',
      h2_bold: 'font-heading font-medium text-3xl',
      h2: 'font-heading font-normal text-3xl',
      h3_bold: 'font-heading font-medium text-2xl',
      h3: 'font-heading font-normal text-2xl',
      body1_bold: 'font-body font-medium text-xl',
      body1: 'font-body font-normal text-xl',
      body2_bold: 'font-body font-medium text-lg',
      body2: 'font-body font-normal text-lg',
      caption1_bold: 'font-body font-medium text-base',
      caption1: 'font-body font-normal text-base',
      caption2_bold: 'font-body font-medium text-sm',
      caption2: 'font-body font-normal text-sm',
      hairline1: 'font-body font-semibold text-base',
    },
  },
})

import {cn} from '@/utils'
import {Slot} from '@radix-ui/react-slot'
import {VariantProps, cva} from 'class-variance-authority'
import {FC, PropsWithChildren} from 'react'

export const typographyVariants = cva('text-gray-darker', {
  variants: {
    variant: {
      hero: 'font-heading font-semibold text-5xl',
      h1_bold: 'font-heading font-medium text-4xl',
      h1: 'font-heading font-normal text-4xl',
      h2_bold: 'font-heading font-medium text-3xl',
      h2: 'font-heading font-normal text-3xl',
      h3_bold: 'font-heading font-medium text-2xl',
      h3: 'font-heading font-normal text-2xl',
      body1: 'font-body font-normal text-xl',
      body1_bold: 'font-body font-medium text-xl',
      body2: 'font-body font-normal text-lg',
      body2_bold: 'font-body font-medium text-lg',
      caption1: 'font-body font-normal text-base',
      caption1_bold: 'font-body font-medium text-base',
      caption2: 'font-body font-normal text-sm',
      caption2_bold: 'font-body font-medium text-sm',
      hairline1: 'font-body font-semibold text-base',
    },
  },
})

interface TypographyHeading
  extends PropsWithChildren,
    Required<VariantProps<typeof typographyVariants>> {
  asChild?: boolean
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  className?: string
}

export const Typography: FC<TypographyHeading> = ({
  asChild,
  tag,
  variant,
  className,
  children,
}) => {
  const Comp = asChild ? Slot : tag || 'p'
  return (
    <Comp className={cn(typographyVariants({variant}), className)}>
      {children}
    </Comp>
  )
}

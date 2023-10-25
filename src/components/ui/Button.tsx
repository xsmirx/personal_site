import {cn} from '@/utils'
import {Slot} from '@radix-ui/react-slot'
import {VariantProps, cva} from 'class-variance-authority'
import {ButtonHTMLAttributes, forwardRef} from 'react'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-heading font-medium text-sm rounded-full ring-offset-white dark:ring-offset-gray-darkest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary hover:bg-primary/90',
        secondary: 'bg-secondary hover:bg-secondary/90',
        destructive: 'bg-status-error hover:bg-status-error/90',
        outline:
          'border bg-white dark:bg-gray-darkest hover:bg-gray-lightest-2 dark:hover:bg-gray-darker',
        ghost:
          'text-gray-darker dark:text-gray-lighter hover:bg-gray-lightest-2 dark:hover:bg-gray-darker',
      },
      size: {
        xl: 'min-w-[197px] h-14 py-5 px-12 text-xl',
        lg: 'min-w-[161px] h-11 py-3 px-8 text-lg',
        md: 'min-w-[133px] h-9 py-2 px-4 text-base',
        sm: 'min-w-[129px] h-7 py-1 px-4 text-sm',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  className?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {asChild, variant = 'primary', size = 'md', className, children, ...props},
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({variant, size}), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

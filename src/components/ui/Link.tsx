import {cn} from '@/utils'
import Link from 'next/link'
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react'

export const AppLink = forwardRef<
  ElementRef<typeof Link>,
  ComponentPropsWithoutRef<typeof Link>
>(({href, className, children, ...props}, ref) => {
  return (
    <Link
      className={cn(
        'rounded-md ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:ring-offset-gray-darkest',
        className,
      )}
      href={href}
      ref={ref}
      {...props}
    >
      {children}
    </Link>
  )
})
AppLink.displayName = Link.displayName

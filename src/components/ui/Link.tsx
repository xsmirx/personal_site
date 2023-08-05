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
        'ring-offset-white dark:ring-offset-gray-darkest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md',
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

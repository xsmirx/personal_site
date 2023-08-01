import {cn} from '@/utils'
import Link, {LinkProps} from 'next/link'
import {FC, PropsWithChildren, forwardRef} from 'react'

interface AppLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>,
    LinkProps,
    PropsWithChildren {}

export const AppLink: FC<AppLinkProps> = forwardRef<
  HTMLAnchorElement,
  AppLinkProps
>(({href, className, children, ...props}, ref) => {
  return (
    <Link
      className={cn(
        'ring-offset-white dark:ring-offset-gray-darkest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-1 rounded-full',
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

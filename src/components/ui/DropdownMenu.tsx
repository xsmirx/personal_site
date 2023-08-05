'use client'

import {cn} from '@/utils'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react'

export const DropdownMenu = DropdownMenuPrimitive.Root

export const DropdownMenuTrigger = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>
>(({asChild, className, children, ...props}, ref) => {
  return (
    <DropdownMenuPrimitive.Trigger
      asChild={asChild}
      className={cn(
        {
          'ring-offset-white dark:ring-offset-gray-darkest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md':
            !asChild,
        },
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Trigger>
  )
})
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName

export const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({className, children, ...props}, ref) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={cn(
          'z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-lightest dark:border-gray bg-white dark:bg-gray-darker p-1 text-gray-darker dark:text-gray-lighter shadow-md animate-in data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
})
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

export const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({className, children, ...props}, ref) => {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-lightest dark:focus:bg-gray-dark data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  )
})
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

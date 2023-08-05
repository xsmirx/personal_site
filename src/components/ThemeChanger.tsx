'use client'

import {Laptop, Moon, Sun} from 'lucide-react'
import {useTheme} from 'next-themes'
import {FC} from 'react'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '.'

export const ThemeChanger: FC = () => {
  const {setTheme} = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={'icon'} variant={'ghost'}>
          <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Laptop className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

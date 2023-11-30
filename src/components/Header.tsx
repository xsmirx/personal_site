import {cn} from '@/utils'
import Link from 'next/link'
import {FC} from 'react'
import {ThemeChanger} from './ThemeChanger'
import {linkVariants, textVariants} from './ui'

interface Props {
  className?: string
}

export const Header: FC<Props> = ({className}) => {
  return (
    <header className={cn('sticky top-0', className)}>
      <div className="container mx-auto flex flex-row items-center justify-between py-2">
        <Link href="/" className={linkVariants()}>
          <span className={textVariants({variant: 'h1_bold'})}>
            Ivan Smirnov
          </span>
        </Link>
        <ThemeChanger />
      </div>
    </header>
  )
}

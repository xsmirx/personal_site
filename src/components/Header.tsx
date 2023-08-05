import {cn} from '@/utils'
import {FC} from 'react'
import {AppLink, Typography} from '.'
import {ThemeChanger} from './ThemeChanger'

interface Props {
  className?: string
}

export const Header: FC<Props> = ({className}) => {
  return (
    <header
      className={cn(
        'flex flex-row justify-between container mx-auto sticky',
        className,
      )}
    >
      <AppLink href="/">
        <Typography tag="span" variant={'hero'}>
          Header
        </Typography>
      </AppLink>
      <ThemeChanger />
    </header>
  )
}

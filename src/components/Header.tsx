import {cn} from '@/utils'
import Link from 'next/link'
import {FC} from 'react'
import {Typography} from '.'

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
      <Link href="/">
        <Typography tag="span" variant={'hero'}>
          Header
        </Typography>
      </Link>
    </header>
  )
}

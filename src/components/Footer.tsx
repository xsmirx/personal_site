import {cn} from '@/utils'
import {FC} from 'react'
import {Typography} from '.'

interface Props {
  className?: string
}

export const Footer: FC<Props> = ({className}) => {
  return (
    <footer className={cn('container mx-auto py-4', className)}>
      <Typography variant={'hero'} tag="span">
        Footer
      </Typography>
    </footer>
  )
}

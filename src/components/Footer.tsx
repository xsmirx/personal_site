import {cn} from '@/utils'
import {FC} from 'react'
import {textVariants} from './ui'

interface Props {
  className?: string
}

export const Footer: FC<Props> = ({className}) => {
  return (
    <footer className={cn('container mx-auto py-4', className)}>
      <span className={textVariants({variant: 'hero'})}>Footer</span>
    </footer>
  )
}

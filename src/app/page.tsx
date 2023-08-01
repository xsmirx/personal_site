import {AppLink, Button, Typography} from '@/components'

export default function Home() {
  return (
    <div className="container m-auto">
      <Typography tag="h1" variant={'hero'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag="h1" variant={'h1'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag="h1" variant={'h1_bold'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag="h2" variant={'h2'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag="h2" variant={'h2_bold'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag="h3" variant={'h3'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag="h3" variant={'h3_bold'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag={'p'} variant={'body1'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag={'p'} variant={'body1_bold'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag={'p'} variant={'body2'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag={'p'} variant={'body2_bold'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag={'p'} variant={'caption1'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag={'p'} variant={'caption1_bold'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag={'p'} variant={'caption2'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag={'p'} variant={'caption2_bold'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tag={'span'} variant={'hairline1'}>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <div className="flex gap-5 items-center mb-2">
        <Button size={'xl'}>Test</Button>
        <Button size={'lg'}>Test</Button>
        <Button size={'md'}>Test</Button>
        <Button size={'sm'}>Test</Button>
        <Button size={'icon'}>Test</Button>
      </div>
      <div className="flex gap-5 items-center mb-2">
        <Button size={'xl'} variant={'secondary'}>
          Test
        </Button>
        <Button size={'lg'} variant={'secondary'}>
          Test
        </Button>
        <Button size={'md'} variant={'secondary'}>
          Test
        </Button>
        <Button size={'sm'} variant={'secondary'}>
          Test
        </Button>
        <Button size={'icon'} variant={'secondary'}>
          Test
        </Button>
      </div>
      <div className="flex gap-5 items-center mb-2">
        <Button size={'xl'} variant={'destructive'}>
          Test
        </Button>
        <Button size={'lg'} variant={'destructive'}>
          Test
        </Button>
        <Button size={'md'} variant={'destructive'}>
          Test
        </Button>
        <Button size={'sm'} variant={'destructive'}>
          Test
        </Button>
        <Button size={'icon'} variant={'destructive'}>
          Test
        </Button>
      </div>
      <div className="flex gap-5 items-center mb-2">
        <Button size={'xl'} variant={'outline'}>
          Test
        </Button>
        <Button size={'lg'} variant={'outline'}>
          Test
        </Button>
        <Button size={'md'} variant={'outline'}>
          Test
        </Button>
        <Button size={'sm'} variant={'outline'}>
          Test
        </Button>
        <Button size={'icon'} variant={'outline'}>
          Test
        </Button>
      </div>
      <div className="flex gap-5 items-center mb-2">
        <Button size={'xl'} variant={'ghost'}>
          Test
        </Button>
        <Button size={'lg'} variant={'ghost'}>
          Test
        </Button>
        <Button size={'md'} variant={'ghost'}>
          Test
        </Button>
        <Button size={'sm'} variant={'ghost'}>
          Test
        </Button>
        <Button size={'icon'} variant={'ghost'}>
          Test
        </Button>
      </div>
      <div className="flex gap-5 items-center mb-2">
        <AppLink href={'/'}>Link</AppLink>
      </div>
    </div>
  )
}

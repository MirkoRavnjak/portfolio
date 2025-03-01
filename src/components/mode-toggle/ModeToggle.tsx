

import {useState,  useEffect } from 'react'
import Button from '@mui/joy/Button'
import { useColorScheme } from '@mui/joy/styles'

export default function ModeToggle() {

  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = useState(false)

  // necessary for server-side rendering
  // because mode is undefined on the server

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant={'soft'}> Change mode </Button>
  }

  return (
    <Button
      sx={{height: '2em', width: '10em', my: 2}}
      //size="md"
      variant='soft'
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}
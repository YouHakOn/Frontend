'use client'

import { Button, useMantineTheme } from '@mantine/core'

const HomePage = () => {
  const theme = useMantineTheme()

  return (
    <div>
      {/* test */}
      <p
        style={{
          backgroundColor: theme.colors.primary[2]
        }}
      >
        <Button
          style={{ width: '116px' }}
          variant="filled"
          color={theme.colors.primary[5]}
          size="lg"
        >
          로그인
        </Button>
      </p>
    </div>
  )
}

export default HomePage

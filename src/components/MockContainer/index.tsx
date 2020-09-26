import { CSSReset, ThemeProvider } from '@chakra-ui/core'
import React from 'react'

type MockContainerProps = {
  children: React.ReactChild[] | React.ReactChild
}

export const MockContainer: React.FC<MockContainerProps> = ({ children }) => (
  <ThemeProvider>
    <CSSReset />
    {children}
  </ThemeProvider>
)

// 'use client'
import React from 'react'
import { createTheme, MantineProvider, rem } from '@mantine/core'
import classes from '@app/providers/mantine.module.css'

const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    'primary': [
      '#EAFAF4', '#D1F7E3', '#A9F0CC', '#80EAB5', '#4DDA9A', 
      '#00C471', '#009D5E', '#009784D', '#004D2D', '#00331D'
    ],
    'secondary': [
      '#F5FAFF', '#DFF0FE', '#B3D9FA', '#86BFF5', '#5AA0F0',
      '#2F80ED', '#2D87EA', '#2677E0', '#1D63CC', '#154DAD'
    ],
    'gray': [
      '#F8F9FA', '#F1F3F5', '#E9ECEF', '#DEE2E6', '#DEE2E6', 
      '#ADB5BD', '#868E96', '#495057', '#343A40', '#212529'],
  },
  fontFamily: 'Pretendard',
  fontSizes: {
    b1: rem('18px'),
    b2: rem('16px'),
    c1: rem('14px'),
    c2: rem('12px'),
  },
  lineHeights: {
    b1: rem('26px'),
    b2: rem('24px'),
    c1: rem('20px'),
    c2: rem('18px'),
  },
  headings: {
    sizes: {
      h1: { fontWeight: '700', fontSize: rem('32px'), lineHeight: rem('42px') }, // equiv to h0 in figma
      h2: { fontWeight: '700', fontSize: rem('28px'), lineHeight: rem('38px') },
      h3: { fontWeight: '700', fontSize: rem('24px'), lineHeight: rem('34px') },
      h4: { fontWeight: '700', fontSize: rem('20px'), lineHeight: rem('28px') },
    }
  },
  components: {
    Button: {
      classNames: classes
    }
  },
  defaultRadius: 6,
});

interface PropType {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: PropType) {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  )
}
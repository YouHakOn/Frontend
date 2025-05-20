import React from 'react';
import { createTheme, colorsTuple, MantineProvider } from '@mantine/core';

const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    'primary': [
      '#EAFAF4', '#D1F7E3', '#A9F0CC', '#80EAB5', '#00C471', 
      '#009D5E', '#009D5E', '#009D5E', '#00784D', '#004D2D', '#00331D'
    ],
    'secondary': [
      '#F5FAFF', '#DFF0FE', '#B3D9FA', '#86BFF5', '#5AA0F0',
      '#2F80ED', '#2D87EA', '#2677E0', '#1D63CC', '#154DAD'
    ],
    'gray': [
      '#F8F9FA', '#F1F3F5', '#E9ECEF', '#DEE2E6', '#DEE2E6', 
      '#ADB5BD', '#868E96', '#495057', '#343A40', '#212529'],
    'line': [
      '#CED4DA', '#ADB5BD', '#E9ECEF',
      '#CED4DA', '#ADB5BD', '#E9ECEF',
      '#CED4DA', '#ADB5BD', '#E9ECEF', '#CED4DA'
    ],
    'bg': [
      '#FFFFFF', '#F8F9FA', '#F1F3F5',
      '#FFFFFF', '#F8F9FA', '#F1F3F5',
      '#FFFFFF', '#F8F9FA', '#F1F3F5', '#FFFFFF'
    ],
    'text': [
      '#212529', '#343A40', '#868E96', '#ADB5BD', '#FFFFFF',
      '#212529', '#343A40', '#868E96', '#ADB5BD', '#FFFFFF'
    ],
    'icon': [
      '#343A40', '#868E96', '#CED4DA',
      '#343A40', '#868E96', '#CED4DA',
      '#343A40', '#868E96', '#CED4DA', '#343A40'
    ],
    'divider': [
      '#DEE2E6', '#ADB5BD', '#DEE2E6', '#ADB5BD', '#DEE2E6',
      '#ADB5BD', '#DEE2E6', '#ADB5BD', '#DEE2E6', '#ADB5BD'
    ],
    'status': [
      '#FF5C45', '#FFC83C', '#33D486', '#3789FF',
      '#FF5C45', '#FFC83C', '#33D486', '#3789FF', '#FF5C45', '#FFC83C'
    ],
  }
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
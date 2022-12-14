import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  color: {
    gray: {
      '900': '#181b23',
      '800': '#1f2d29',
      '700': '#353646',
      '600': '#4b4d63',
      '500': '#616480',
      '400': '#797d9a',
      '300': '#9699b0',
      '200': '#b3b5c6',
      '100': '#d1d2dc',
      '50': '#eeeef2',
    },
    pink: {
      '50': '#FFF5F7',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'green.50',
      },
    },
  },
});

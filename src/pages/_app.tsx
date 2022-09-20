import type { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import SidebarDrawerProvider from '../contexts/SidebarDrawer';
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/queryClient';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;

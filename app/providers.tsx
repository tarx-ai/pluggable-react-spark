'use client';
import { ChakraProvider } from '@chakra-ui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  const AnyChakraProvider = ChakraProvider as any;
  return <AnyChakraProvider>{children}</AnyChakraProvider>;
}


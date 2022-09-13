import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { createContext } from 'react';

interface SidebarDrawerProviderProps {
  children: React.ReactNode;
}

type UseDisclosureProps = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as UseDisclosureProps);

export default function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

import { useDisclosure, UseDisclosureProps } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useRouter } from 'next/router'

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

type SidebarDrawerContextData = UseDisclosureProps;

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(()=> {
    disclosure.onClose();
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
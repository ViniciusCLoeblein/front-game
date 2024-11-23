'use client'

import Navbar from '@/components/navbar'
import { usePathname } from 'next/navigation'
import { MantineProvider } from '@mantine/core'
import React, { ReactNode, useCallback, useMemo } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

export const Providers = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()

  const linksIgnore = useMemo(
    () => ['/usuario/acessar', '/usuario/cadastro'],
    [],
  )

  const isLinkIgnored = useCallback(
    (link: string) => {
      return linksIgnore.includes(link)
    },
    [linksIgnore],
  )

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <MantineProvider>
          {!isLinkIgnored(pathname) && <Navbar />}
          {children}
        </MantineProvider>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

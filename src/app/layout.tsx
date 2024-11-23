import './globals.css'
import '@mantine/core/styles.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Providers } from './providers'
import { ToastContainer } from 'react-toastify'

const montserratRegular = localFont({
  src: './fonts/Montserrat-Regular.ttf',
  variable: '--font-montserrat-regular',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'App game',
  description: 'Projeto de game',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserratRegular.variable} antialiased`}>
        <Providers>
          <ToastContainer
            position={'top-right'}
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            limit={1}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="colored"
            stacked
            closeButton
          />
          {children}
        </Providers>
      </body>
    </html>
  )
}

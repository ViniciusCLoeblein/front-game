'use client'

import { motion } from 'framer-motion'
import { getUserCookies } from '@/functions/cookies'

const Home: React.FC = () => {
  const user = getUserCookies()

  return (
    <div className="flex items-start justify-center pl-6 pr-6 mt-10 sm:mt-20">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        initial={{ opacity: 0, x: -100 }}
        className="max-w-3xl w-full"
      >
        {user && (
          <>
            <h1 className="text-3xl sm:text-4xl font-semibold text-cyan-800">
              Bem-vindo, {user?.name}!
            </h1>
            <p className="mt-2 text-lg text-gray-700">
              O aplicativo conta com salas de jogos e muito mais!
            </p>
            <p className="mt-4 text-sm sm:text-base text-frgprimary">
              Navegue pelo menu acima e divirta-se.
            </p>
          </>
        )}
        {!user && (
          <div className="mt-4 animate-pulse text-center text-gray-500">
            Carregando informações do usuário...
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Home

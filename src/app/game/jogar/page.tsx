'use client'

import { useState } from 'react'
import { TbGoGame } from 'react-icons/tb'
import Stepper from '@/components/stepper'
import StartGame from './components/start'
import ListGame from './components/list-game'
import { IoGameController } from 'react-icons/io5'
import { useMutation } from '@tanstack/react-query'
import { infoGame, returnPlay } from '@/service/game'
import { Step } from '@/components/stepper/interface'

const steps: Step[] = [
  {
    label: 'Jogos',
    completedIcon: <TbGoGame />,
    description: 'Todos os jogos pendentes',
  },
  {
    label: 'Jogar',
    disabled: true,
    description: 'Jogue aqui',
    completedIcon: <IoGameController />,
  },
]

const GamePlay: React.FC = () => {
  const [active, setActive] = useState(0)
  const gameInfo = useMutation({
    mutationFn: infoGame,
    onSuccess: () => setActive(1),
  })

  const playReturn = useMutation({
    mutationFn: returnPlay,
    onSuccess: (v) => {
      setActive(1)
      gameInfo.mutate({ id: v.tabuleiro.id })
    },
  })

  const renderTabContent = () => {
    switch (active) {
      case 0:
        return (
          <ListGame
            onReturnGame={(id) => playReturn.mutate({ id })}
            onStartGame={(v) => gameInfo.mutate({ id: v.game.id })}
          />
        )
      case 1:
        return (
          <StartGame
            infoGame={gameInfo.data}
            handlePlayerMove={(id) => playReturn.mutate({ id })}
          />
        )
      default:
        return 'Escolha uma aba para ver o conteúdo'
    }
  }

  return (
    <>
      <div className="p-8 flex flex-col text-gray-900 items-center">
        <h1 className="text-4xl font-bold text-cyan-800 mb-3">Sala de jogos</h1>
        <p className="text-xl text-gray-700 mb-12 max-w-screen-2xl text-center">
          Aqui você pode jogar todos os jogos disponíveis.
        </p>
      </div>
      <div className="flex flex-col items-center pt-5 pb-8 space-y-3">
        <Stepper active={0} setActive={setActive} steps={steps} />
      </div>
      {renderTabContent()}
    </>
  )
}

export default GamePlay

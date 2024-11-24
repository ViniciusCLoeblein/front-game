import React from 'react'
import { RenderBoardProps, StartGameProps } from '../../util/interface'

const renderBoard = ({
  houses,
  player1Position,
  player2Position,
}: RenderBoardProps) => {
  const colors = ['#A5D8FF', '#74C0FC', '#4DABF7']
  const board = []

  // Criar as casas
  for (let i = 1; i <= houses; i++) {
    const player1Marker = player1Position === i ? '🟢' : ''
    const player2Marker = player2Position === i ? '🔵' : ''
    board.push(
      <div
        key={i}
        className={`w-20 h-20 flex flex-col items-center justify-center border ${player1Marker || player2Marker ? 'bg-blue-300' : 'bg-blue-100'} rounded-xl`}
        style={{
          backgroundColor: colors[(i - 1) % colors.length],
        }}
      >
        <span className="text-sm font-semibold text-white">{i}</span>
        <div className="flex mt-auto">
          {player1Marker}
          {player2Marker}
        </div>
      </div>,
    )
  }

  // Agrupar as casas em linhas de 10
  const rows = []
  for (let i = 0; i < board.length; i += 10) {
    rows.push(
      <div key={i} className="flex flex-wrap justify-start">
        {board.slice(i, i + 10)}
      </div>,
    )
  }

  return rows
}

const StartGame = ({ infoGame, handlePlayerMove }: StartGameProps) => {
  if (!infoGame) return null
  const { player1, player2, currentPlayer, winner, map } = infoGame

  const player1Color = '#4CAF50'
  const player2Color = '#2196F3'

  // Verifica se algum jogador chegou à última casa
  const isGameFinished =
    player1.position === map.houses || player2.position === map.houses
  const gameStatus = isGameFinished ? 'Concluído' : 'Em Andamento'

  return (
    <div className="p-8 bg-gray-100 rounded-lg max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{`Jogo ${gameStatus}`}</h1>
      {!isGameFinished && (
        <>
          <p className="mb-4">
            <strong>Jogador Atual:</strong> {currentPlayer}
          </p>
          {winner && (
            <p className="mb-4">
              <strong>Vencedor:</strong> {winner}
            </p>
          )}
        </>
      )}
      <div className="my-8">
        <div className="flex space-x-1">
          <div className="w-20 h-20 flex items-center justify-center bg-yellow-500 text-white rounded-xl font-bold">
            Início
          </div>
          {renderBoard({
            houses: map.houses,
            player1Position: player1.position,
            player2Position: player2.position,
          })}
          <div className="w-20 h-20 flex items-center justify-center bg-yellow-500 text-white rounded-xl font-bold">
            Fim
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="font-semibold">
            {player1.name} está na posição {player1.position}
          </p>
          <div className="flex items-center">
            <span className="text-2xl" style={{ color: player1Color }}>
              🟢
            </span>
            <span className="ml-2" style={{ color: player1Color }}>
              Cor: 🟢
            </span>
          </div>
        </div>
        <button
          className="mt-2 px-6 py-2 text-white font-bold rounded-lg"
          onClick={() => handlePlayerMove(infoGame.id)}
          disabled={currentPlayer !== player1.name || isGameFinished}
          style={{
            backgroundColor:
              currentPlayer !== player1.name || isGameFinished
                ? 'gray'
                : player1Color,
          }}
        >
          Jogar {player1.name}
        </button>

        <div className="flex justify-between items-center">
          <p className="font-semibold">
            {player2.name} está na posição {player2.position}
          </p>
          <div className="flex items-center">
            <span className="text-2xl" style={{ color: player2Color }}>
              🔵
            </span>
            <span className="ml-2" style={{ color: player2Color }}>
              Cor: 🔵
            </span>
          </div>
        </div>
        <button
          className="mt-2 px-6 py-2 text-white font-bold rounded-lg"
          onClick={() => handlePlayerMove(infoGame.id)}
          disabled={currentPlayer !== player2.name || isGameFinished}
          style={{
            backgroundColor:
              currentPlayer !== player2.name || isGameFinished
                ? 'gray'
                : player2Color,
          }}
        >
          Jogar {player2.name}
        </button>
      </div>
    </div>
  )
}

export default StartGame

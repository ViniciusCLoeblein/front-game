import {
  Maps,
  Games,
  InfoGameRes,
  StartGameRes,
} from '@/service/game/interface'

export interface ListGameProps {
  onStartGame: (v: StartGameRes) => void
  onReturnGame: (id: number) => void
}

export interface CardProps {
  data: Games
  onClick: (id: number) => void
}

export interface DialogGameProps {
  list: Maps[]
  open: boolean
  onStartGame: (v: StartGameRes) => void
  setDialog: React.Dispatch<React.SetStateAction<boolean>>
}

export interface InitialValues {
  player1Name: string
  player2Name: string
  map: Maps | null
}

export interface StartGameProps {
  infoGame?: InfoGameRes
  handlePlayerMove: (id: number) => void
}

export interface RenderBoardProps {
  houses: number
  player1Position: number
  player2Position: number
}

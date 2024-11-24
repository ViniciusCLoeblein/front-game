export interface GetMapsReq {
  page: number
  size: number
}
export interface Maps {
  id: number
  name: string
  houses: number
}

export interface GetMapsRes {
  currentPage: number
  totalPages: number
  pageSize: number
  totalItems: number
  data: Maps[]
}

export interface PostMapsReq {
  name: string
  houses: number
}

export interface PutMapsReq {
  id: number | string
  data: PostMapsReq
}

export interface IdReq {
  id: number | string
}

export interface PlayGame {
  name: string
  position: number
}
export interface Games {
  gameId: 8
  player1: PlayGame
  player2: PlayGame
  currentPlayer: string
  winner: null | string
  map: Maps
}

export interface GetGamesRes {
  currentPage: string
  totalPages: number
  pageSize: string
  totalItems: number
  games: Games[]
}

export interface StartGameReq {
  player1Name: string
  player2Name: string
  mapId: number
}

export interface StartGameRes {
  message: string
  game: {
    player1Name: string
    player2Name: string
    mapId: number
    winnerId: null | string
    id: number
    player1Position: number
    player2Position: number
    currentPlayerIndex: number
  }
}

export interface ReturnPlayRes {
  player: string
  dice: number
  currentPosition: number
  winner: null | string
  tabuleiro: {
    id: number
    player1Name: string
    player2Name: string
    player1Position: number
    player2Position: number
    currentPlayerIndex: number
    winnerId: null | number
    mapId: number
    map: Maps
  }
}

export interface InfoGameRes {
  id: number
  player1: {
    name: string
    position: number
  }
  player2: {
    name: string
    position: number
  }
  currentPlayer: string
  winner: null | string
  map: Maps
}

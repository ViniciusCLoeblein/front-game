import axios from '..'
import {
  IdReq,
  GetGamesRes,
  GetMapsReq,
  GetMapsRes,
  PostMapsReq,
  PutMapsReq,
  StartGameReq,
  StartGameRes,
  ReturnPlayRes,
  InfoGameRes,
} from './interface'

export const getMaps = async (data: GetMapsReq): Promise<GetMapsRes> => {
  const response = await axios.get<GetMapsRes>('/game/maps', {
    params: data,
  })
  return Promise.resolve(response.data)
}

export const putMaps = async ({ data, id }: PutMapsReq): Promise<object> => {
  const response = await axios.put<object>(`/game/map/${id}`, data)
  return Promise.resolve(response.data)
}

export const postMaps = async (data: PostMapsReq): Promise<object> => {
  const response = await axios.post<object>('/game/map', data)
  return Promise.resolve(response.data)
}

export const deleteMaps = async ({ id }: IdReq): Promise<object> => {
  const response = await axios.delete<object>(`/game/map/${id}`)
  return Promise.resolve(response.data)
}

export const getGames = async (data: GetMapsReq): Promise<GetGamesRes> => {
  const response = await axios.get<GetGamesRes>('/game/games', {
    params: data,
  })
  return Promise.resolve(response.data)
}

export const returnPlay = async ({ id }: IdReq): Promise<ReturnPlayRes> => {
  const response = await axios.put<ReturnPlayRes>(`/game/play-turn/${id}`)
  return Promise.resolve(response.data)
}

export const startGame = async (data: StartGameReq): Promise<StartGameRes> => {
  const response = await axios.post<StartGameRes>('/game/start', data)
  return Promise.resolve(response.data)
}

export const infoGame = async ({ id }: IdReq): Promise<InfoGameRes> => {
  const response = await axios.get<InfoGameRes>(`/game/game/${id}`)
  return Promise.resolve(response.data)
}

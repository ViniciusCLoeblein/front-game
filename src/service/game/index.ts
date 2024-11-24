import axios from '..'
import { GetMapsReq, GetMapsRes } from './interface'

export const getMaps = async (data: GetMapsReq): Promise<GetMapsRes> => {
  const response = await axios.post<GetMapsRes>('/game/maps', data)
  return Promise.resolve(response.data)
}

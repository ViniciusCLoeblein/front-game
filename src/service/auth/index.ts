import axios from '..'
import { LoginReq, LoginRes } from './interface'

export const login = async (data: LoginReq): Promise<LoginRes> => {
  const response = await axios.post<LoginRes>('/auth/login', data)
  return Promise.resolve(response.data)
}

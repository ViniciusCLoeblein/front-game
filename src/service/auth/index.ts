import axios from '..'
import { LoginReq, LoginRes } from './interface'

export const login = async (data: LoginReq): Promise<LoginRes> => {
  const response = await axios.post<LoginRes>('/auth/login', data)
  return Promise.resolve(response.data)
}

export const register = async (data: LoginReq): Promise<object> => {
  const response = await axios.post<object>('/auth/register', data)
  return Promise.resolve(response.data)
}

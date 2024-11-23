export interface LoginReq {
  email: string
  password: string
}

export interface LoginRes {
  id: string
  email: string
  name: string
  accessToken: string
  accessTokenExpiresAt: string
}
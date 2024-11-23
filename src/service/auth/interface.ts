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

export interface RegisterReq {
  email: string
  name: string
  password: string
}

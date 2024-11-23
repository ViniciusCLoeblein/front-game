import { isClient } from '@/lib'
import { LoginRes } from '@/service/auth/interface'
import { getCookie, setCookie, deleteCookie } from 'cookies-next'

export const deleteAllCookies = () => {
  deleteCookie('LOGIN_INFO')
  if (isClient()) {
    window.location.href = '/usuario/acessar'
  }
}

export const setUserCookies = (data: string) => {
  if (isClient()) {
    setCookie('LOGIN_INFO', data, {
      secure: false,
      sameSite: 'strict',
    })
  }
}

export const getUserCookies = (): LoginRes | null => {
  const cookiesUser = getCookie('LOGIN_INFO')

  if (cookiesUser) {
    const user: LoginRes = JSON.parse(cookiesUser as string)
    return user
  } else {
    deleteAllCookies()
  }

  return null
}

import axios from 'axios'
import { toast } from 'react-toastify'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

let msg

instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      msg = 'Sua sessão expirou, faça login novamente!'
      toast.warn(msg, {
        toastId: msg,
      })

      if (typeof window !== 'undefined') {
        window.location.href = 'usuario/acessar'
      }
    } else if (error.response && error.response.status === 0) {
      msg = 'Falha ao se comunicar com o serviço!'
      toast.warn(msg, {
        toastId: msg,
      })
    } else {
      msg =
        error.response?.data.errors[0][0].details ??
        'Ocorreu um erro inesperado, tente novamente mais tarde'
      toast.warn(msg, {
        toastId: msg,
      })
    }
    return Promise.reject(new Error(msg || 'Erro desconhecido'))
  },
)

export default instance

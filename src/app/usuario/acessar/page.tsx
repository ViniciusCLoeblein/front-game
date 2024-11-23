'use client'

import instance from '@/service'
import { useCallback, useEffect, useState } from 'react'
import { login } from '@/service/auth'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import Image from 'next/image'
import { Button, CircularProgress } from '@mui/material'

export default function Login() {
  const router = useRouter()

  const [valor, setValor] = useState({ password: '', email: '' })

  const loginAuth = useMutation({
    mutationFn: login,
    onSuccess: (r) => {
      console.log('token: ' + r.accessToken)
      instance.defaults.headers.common.Authorization = `Bearer ${r.accessToken}`
      router.push('/')
    },
  })

  const form = useForm({
    defaultValues: valor,
    validatorAdapter: zodValidator(),
    onSubmit: ({ value }) => {
      loginAuth.mutateAsync(value)
    },
  })

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      form.handleSubmit()
    },
    [form],
  )

  useEffect(() => {
    const unsubscribe = form.store.subscribe(() => {
      setValor(form.store.state.values)
    })
    return () => unsubscribe()
  }, [form.store, form.store.state.values])

  return (
    <div className="select-none min-h-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-cyan-800 via-sky-900 to-cyan-800 py-12 px-4 sm:px-6 lg:px-8 relative -mb-10">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="animate-background-lines w-full h-full absolute transform -skew-y-[20deg] opacity-20 bg-gradient-to-r from-white to-transparent" />
      </div>
      <div className="text-center flex flex-col items-center pb-8 z-10">
        <Image
          priority
          src="/upf.png"
          alt="logo-upf"
          width={200}
          height={200}
          className="w-auto h-auto"
        />
      </div>
      <div className="max-w-md w-full bg-white bg-opacity-90 p-10 rounded-lg shadow-2xl space-y-8 z-10 backdrop-blur-lg">
        <h2 className="text-2xl font-extrabold text-center w-full text-cyan-800">
          Iniciar sessão
        </h2>
        <p className="text-sm text-gray-900">
          Bem-vindo! <br />
          Entre com suas credenciais para acessar sua conta.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <form.Field name="email">
            {(v) => (
              <input
                required
                // size="small"
                type="email"
                // label="Email"
                autoComplete="email"
                value={v.state.value}
                // sx={{ width: '100%' }}
                placeholder="Informe seu email"
                onChange={(e) => v.handleChange(e.target.value)}
              />
            )}
          </form.Field>
          <form.Field name="password">
            {(v) => (
              <input
                required
                // size="small"
                // label="Senha"
                autoComplete="new-password"
                value={v.state.value}
                // sx={{ width: '100%' }}
                placeholder="Informe sua senha"
                // type={showPswd ? 'text' : 'password'}
                onChange={(e) => v.handleChange(e.target.value)}
                // InputProps={{
                //   endAdornment: (
                //     <InputAdornment
                //       className="cursor-pointer"
                //       position="end"
                //       onClick={() => setShowPswd(!showPswd)}
                //     >
                //       {showPswd ? (
                //         <MdVisibility
                //           size={23}
                //           className="text-frgprimary text-cyan-800"
                //         />
                //       ) : (
                //         <MdVisibilityOff
                //           size={23}
                //           className="text-frgprimary text-cyan-800"
                //         />
                //       )}
                //     </InputAdornment>
                //   ),
                // }}
              />
            )}
          </form.Field>
          <Button
            variant="contained"
            className="!bg-cyan-700 w-full !text-white"
            type="submit"
            endIcon={
              loginAuth.isPending ? (
                <CircularProgress size={18} className="!text-white" />
              ) : null
            }
            disabled={loginAuth.isPending}
          >
            {loginAuth.isPending ? 'Carregando...' : 'entrar'}
          </Button>
        </form>
      </div>
    </div>
  )
}

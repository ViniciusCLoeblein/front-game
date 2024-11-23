'use client'

import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { register } from '@/service/auth'
import { useRouter } from 'next/navigation'
import Input from '@/components/inputs/input'
import { useForm } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import { useCallback, useEffect, useState } from 'react'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { MdVisibilityOff, MdVisibility } from 'react-icons/md'
import { CircularProgress, InputAdornment } from '@mui/material'
import Button from '@/components/button'

export default function Register() {
  const router = useRouter()
  const [showPswd, setShowPswd] = useState(false)
  const [valor, setValor] = useState({ password: '', email: '', name: '' })

  const registerAuth = useMutation({
    mutationFn: register,
    onSuccess: () => {
      toast.success('Cadastro realizado com sucesso!')
      router.push('/usuario/acessar')
    },
    onError: () => toast.error('Ocorreu um erro ao realizar o cadastro.'),
  })

  const form = useForm({
    defaultValues: valor,
    validatorAdapter: zodValidator(),
    onSubmit: ({ value }) => {
      registerAuth.mutateAsync(value)
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
          width={200}
          height={200}
          src="/upf.png"
          alt="logo-upf"
          className="w-auto h-auto"
        />
      </div>
      <div className="max-w-md w-full bg-white bg-opacity-90 p-10 rounded-lg shadow-2xl space-y-8 z-10 backdrop-blur-lg">
        <h2 className="text-2xl font-extrabold text-center w-full text-cyan-800">
          Criar uma nova conta
        </h2>
        <p className="text-sm text-gray-900">
          Preencha os dados abaixo para criar uma conta.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <form.Field name="name">
            {(v) => (
              <Input
                required
                fullWidth
                size="small"
                type="text"
                label="Nome"
                autoComplete="name"
                value={v.state.value}
                placeholder="Informe seu nome completo"
                onChange={(e) => v.handleChange(e.target.value)}
              />
            )}
          </form.Field>
          <form.Field name="email">
            {(v) => (
              <Input
                required
                fullWidth
                size="small"
                type="email"
                label="Email"
                autoComplete="email"
                value={v.state.value}
                placeholder="Informe seu email"
                onChange={(e) => v.handleChange(e.target.value)}
              />
            )}
          </form.Field>
          <form.Field name="password">
            {(v) => (
              <Input
                required
                fullWidth
                size="small"
                label="Senha"
                value={v.state.value}
                autoComplete="new-password"
                placeholder="Crie uma senha"
                type={showPswd ? 'text' : 'password'}
                onChange={(e) => v.handleChange(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      className="cursor-pointer"
                      position="end"
                      onClick={() => setShowPswd(!showPswd)}
                    >
                      {showPswd ? (
                        <MdVisibility
                          size={23}
                          className="text-frgprimary text-cyan-800"
                        />
                      ) : (
                        <MdVisibilityOff
                          size={23}
                          className="text-frgprimary text-cyan-800"
                        />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </form.Field>
          <p className="text-sm">
            Já possui uma conta?{' '}
            <Link
              className="text-frgprimary cursor-pointer text-cyan-700 hover:text-cyan-800"
              href={'/usuario/acessar'}
            >
              Faça login
            </Link>
          </p>
          <Button
            type="submit"
            variant="contained"
            className="!bg-cyan-700 w-full !text-white"
            endIcon={
              registerAuth.isPending ? (
                <CircularProgress size={18} className="!text-white" />
              ) : null
            }
            disabled={registerAuth.isPending}
          >
            {registerAuth.isPending ? 'Carregando...' : 'Cadastrar'}
          </Button>
        </form>
      </div>
    </div>
  )
}

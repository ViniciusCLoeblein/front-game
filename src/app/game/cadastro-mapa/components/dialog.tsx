import {
  Grid2,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  CircularProgress,
} from '@mui/material'
import { nvl } from '@/functions'
import { toast } from 'react-toastify'
import Button from '@/components/button'
import Input from '@/components/inputs/input'
import { useForm } from '@tanstack/react-form'
import { postMaps, putMaps } from '@/service/game'
import { DialogMapsProps } from '../util/interface'
import { useMutation } from '@tanstack/react-query'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { useCallback, useEffect, useMemo, useState } from 'react'

const DialogMaps = ({ open, setOpen, data, reload }: DialogMapsProps) => {
  const initialValues = useMemo(
    () => ({ name: nvl(data?.name), houses: nvl(data?.houses) }),
    [data],
  )
  const [values, setValues] = useState(initialValues)

  const post = useMutation({
    mutationFn: postMaps,
    onSuccess: () => {
      reload()
      toast.success('Cadastro realizado com sucesso!')
    },
    onError: () => toast.error('Ocorreu um erro!'),
  })

  const put = useMutation({
    mutationFn: putMaps,
    onSuccess: () => {
      reload()
      toast.success('Cadastro atualizado com sucesso!')
    },
    onError: () => toast.error('Ocorreu um erro!'),
  })

  const form = useForm({
    defaultValues: values,
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value: { houses, name } }) => {
      const housesN = Number(houses)
      if (!data?.id) {
        post.mutate({ houses: housesN, name })
      } else {
        put.mutate({ id: nvl(data?.id), data: { houses: housesN, name } })
      }
    },
  })

  const handleReset = useCallback(() => {
    form.reset()
    setValues(initialValues)
    setOpen({ data: undefined, active: false })
  }, [form, initialValues, setOpen])

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      e.stopPropagation()
      form.handleSubmit()
    },
    [form],
  )

  useEffect(() => {
    const unsubscribe = form.store.subscribe(() => {
      setValues(form.store.state.values)
    })
    return () => unsubscribe()
  }, [form.store, form.store.state.values])

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={handleReset}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          <p className="text-base font-semibold text-zinc-800">
            Cadastro do mapa do jogo
          </p>
        </DialogTitle>
        <DialogContent className="text-zinc-800">
          <p className="pb-5">
            Informe todos os campos abaixo para o cadastro:
          </p>
          <Grid2 container columns={1} spacing={2}>
            <Grid2 size={1}>
              <form.Field name="name">
                {(v) => (
                  <Input
                    required
                    fullWidth
                    label="Nome"
                    value={v.state.value}
                    onBlur={v.handleBlur}
                    placeholder="Informe o nome do mapa"
                    onChange={(e) => v.handleChange(e.target.value)}
                  />
                )}
              </form.Field>
            </Grid2>
            <Grid2 size={1}>
              <form.Field name="houses">
                {(v) => (
                  <Input
                    required
                    fullWidth
                    label="Qtd casas"
                    value={v.state.value}
                    onBlur={v.handleBlur}
                    placeholder="Informe a quantidade de casas"
                    onChange={(e) => v.handleChange(e.target.value)}
                  />
                )}
              </form.Field>
            </Grid2>
          </Grid2>
        </DialogContent>
        <DialogActions>
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmitting]) => (
              <Button
                autoFocus
                disableElevation
                color="success"
                variant="contained"
                type="submit"
                disabled={!canSubmit}
                endIcon={
                  isSubmitting ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : null
                }
              >
                {isSubmitting ? 'Carregando...' : 'Confirmar'}
              </Button>
            )}
          </form.Subscribe>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default DialogMaps

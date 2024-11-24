import {
  Grid2,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  CircularProgress,
} from '@mui/material'
import { toast } from 'react-toastify'
import Button from '@/components/button'
import { startGame } from '@/service/game'
import Input from '@/components/inputs/input'
import { useForm } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import { zodValidator } from '@tanstack/zod-form-adapter'
import InputSelect from '@/components/inputs/input-select'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { DialogGameProps, InitialValues } from '../../util/interface'

const DialogGame = ({
  list,
  open,
  setDialog,
  onStartGame,
}: DialogGameProps) => {
  const initialValues: InitialValues = useMemo(
    () => ({ player1Name: '', player2Name: '', map: null }),
    [],
  )
  const [values, setValues] = useState(initialValues)

  const gameStart = useMutation({
    mutationFn: startGame,
    onSuccess: (v) => {
      setDialog(false)
      toast.success(v.message)
      onStartGame(v)
    },
    onError: () => toast.error('Ocorreu um erro...'),
  })

  const form = useForm({
    defaultValues: values,
    validatorAdapter: zodValidator(),
    onSubmit: async ({ value }) => {
      gameStart.mutateAsync({
        mapId: Number(value.map?.id),
        player1Name: value.player1Name,
        player2Name: value.player2Name,
      })
    },
  })

  const handleReset = useCallback(() => {
    form.reset()
    setDialog(false)
    setValues(initialValues)
  }, [form, initialValues, setDialog])

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
          <p className="text-base font-semibold text-zinc-800">Novo jogo</p>
        </DialogTitle>
        <DialogContent className="text-zinc-800">
          <p className="pb-5">
            Informe todos os campos abaixo para iniciar seu jogo:
          </p>
          <Grid2 container columns={1} spacing={2}>
            <Grid2 size={1}>
              <form.Field name="map">
                {(v) => (
                  <InputSelect
                    options={list}
                    value={v.state.value}
                    onBlur={v.handleBlur}
                    optionLabel={(v) => v.name}
                    onChange={(_, e) => v.handleChange(e)}
                    textFieldProps={{ required: true, label: 'Lista de mapas' }}
                  />
                )}
              </form.Field>
            </Grid2>
            <Grid2 size={1}>
              <form.Field name="player1Name">
                {(v) => (
                  <Input
                    required
                    fullWidth
                    label="Jogador 1"
                    value={v.state.value}
                    onBlur={v.handleBlur}
                    placeholder="Informe o nome do jogador 1"
                    onChange={(e) => v.handleChange(e.target.value)}
                  />
                )}
              </form.Field>
            </Grid2>
            <Grid2 size={1}>
              <form.Field name="player2Name">
                {(v) => (
                  <Input
                    required
                    fullWidth
                    label="Jogador 2"
                    value={v.state.value}
                    onBlur={v.handleBlur}
                    placeholder="Informe o nome do jogador 2"
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

export default DialogGame

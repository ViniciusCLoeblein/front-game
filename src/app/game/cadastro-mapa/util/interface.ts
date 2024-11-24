import { Maps } from '@/service/game/interface'
import { Dispatch, SetStateAction } from 'react'

export interface OpenProps {
  data?: Maps
  active: boolean
}

export interface DialogMapsProps {
  data?: Maps
  open: boolean
  reload: () => void
  setOpen: Dispatch<SetStateAction<OpenProps>>
}

export interface ColumnsLog {
  remove: (id: number) => void
}

import { ButtonProps } from '@mui/material'

export interface ButtonDisprops extends ButtonProps {
  width?: string
  height?: string
  fontSize?: string
  fontWeight?: string
  borderRadius?: string
  textTransform?: 'uppercase' | 'none'
  border?: string
  variant?: 'contained' | 'outlined' | 'text'
}

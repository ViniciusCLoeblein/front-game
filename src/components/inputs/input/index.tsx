import { cn } from '@/lib'
import { lazy } from 'react'
import { InputProps } from '../utils/interface'

const InputTextField = lazy(() => import('../utils/styled'))

const Input = ({ type = 'text', size, ...rest }: Readonly<InputProps>) => {
  return (
    <InputTextField
      {...rest}
      type={type}
      size={size ?? 'small'}
      className={cn('select-none', rest.className)}
    />
  )
}

export default Input

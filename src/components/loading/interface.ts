import { LottieComponentProps } from 'lottie-react'

export type Animations =
  | 'loading'
  | 'not_found'
  | 'invalid'
  | 'error_page'
  | 'socket'

export interface LoadingProps extends Partial<LottieComponentProps> {
  noPadding?: boolean
  message?: string
  animation?: Animations
}

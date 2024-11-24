export interface Step {
  label: string
  description: string
  disabled?: boolean
  completedIcon?: React.ReactNode
}

export interface GlobalStepperProps {
  active: number
  setActive: (value: number) => void
  steps: Step[]
  color?: string
  className?: string
}

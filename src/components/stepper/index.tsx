import { cn } from '@/lib'
import { GlobalStepperProps } from './interface'
import { Stepper as StepperMantine } from '@mantine/core'

const Stepper = ({
  active,
  setActive,
  steps,
  color = '#437C99',
  className = '',
}: GlobalStepperProps) => {
  return (
    <StepperMantine
      color={color}
      active={active}
      onStepClick={setActive}
      className={cn('w-1/2 max-lg:w-full max-lg:px-8', { className })}
    >
      {steps.map((step, index) => (
        <StepperMantine.Step
          label={step.label}
          key={index + step.label}
          disabled={step.disabled}
          description={step.description}
          completedIcon={step.completedIcon}
        />
      ))}
    </StepperMantine>
  )
}

export default Stepper

import {
  TextFieldProps,
  AutocompleteProps,
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
} from '@mui/material'

export type InputProps = TextFieldProps

export interface InputSelectProps<T, M extends boolean = false>
  extends Omit<
    AutocompleteProps<T, M, boolean | undefined, boolean | undefined>,
    'renderInput' | 'onChange'
  > {
  textFieldProps?: InputProps
  options: T[]
  optionLabel: (data: T) => string
  multiple?: M
  onChange?: (
    event: React.SyntheticEvent,
    value: M extends true ? T[] : T | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<T>,
  ) => void
}

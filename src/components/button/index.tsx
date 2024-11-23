import React from 'react'
import { ButtonDisprops } from './interface'
import { Button as ButtonMui } from '@mui/material'

const Button = React.forwardRef<HTMLButtonElement, ButtonDisprops>(
  (
    {
      width,
      height,
      children,
      fontSize,
      fontWeight,
      borderRadius,
      textTransform,
      ...rest
    }: ButtonDisprops,
    ref,
  ) => {
    return (
      <ButtonMui
        ref={ref}
        sx={{
          '&.MuiButton-root': {
            fontSize: fontSize ?? '12px',
            fontWeight: fontWeight ?? '800',
            fontFamily: 'Montserrat !important',
            textTransform: textTransform ?? 'uppercase',
            borderRadius: borderRadius ?? '4px',
            width,
            height,
          },
        }}
        {...rest}
      >
        {children || rest.title}
      </ButtonMui>
    )
  },
)

Button.displayName = 'Button'

export default Button

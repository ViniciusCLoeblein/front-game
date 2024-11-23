import { styled, TextField } from '@mui/material'

const InputTextField = styled(TextField)({
  '& input': {
    fontFamily: 'Montserrat !important',
    fontSize: '14px',
    color: '#333',
  },
  '& label': {
    fontFamily: 'Montserrat !important',
    fontSize: '14px',
    color: '#333',
  },
  '& label.Mui-focused': {
    color: '#437C99',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#437C99',
  },
  '& .MuiOutlinedInput-root': {
    fontFamily: 'Montserrat !important',
    '& fieldset': {
      borderColor: '#437C99',
    },
    '&:hover fieldset': {
      borderColor: '#437C99',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#437C99',
    },
    '&.Mui-disabled fieldset': {
      borderColor: '#B0BEC5',
      cursor: 'not-allowed',
    },
  },
  '& .MuiFilledInput-root': {
    fontFamily: 'Montserrat !important',
    backgroundColor: '#F9FAFB',
    '&:hover': {
      backgroundColor: '#F5F5F5',
    },
    '&:before': {
      borderBottomColor: '#437C99',
    },
    '&:hover:before': {
      borderBottomColor: '#437C99',
    },
    '&:after': {
      borderBottomColor: '#437C99',
    },
    '&.Mui-disabled': {
      backgroundColor: '#F5F5F5',
      color: '#9E9E9E',
      cursor: 'not-allowed',
    },
  },
  '& .MuiInputBase-input': {
    fontFamily: 'Montserrat !important',
    fontSize: '14px',
    color: '#333',
    '&.Mui-disabled': {
      color: '#9E9E9E',
      cursor: 'not-allowed',
    },
  },
  '& .MuiFormHelperText-root': {
    fontFamily: 'Montserrat !important',
    fontSize: '10px',
    marginLeft: 2,
  },
  '& .Mui-disabled': {
    color: '#9E9E9E',
    cursor: 'not-allowed',
  },
})
export default InputTextField

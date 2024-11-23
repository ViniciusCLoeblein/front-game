import React from 'react'
import Menu from '@mui/material/Menu'
import { Avatar } from '@mantine/core'
import { MdLogout } from 'react-icons/md'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import { deleteAllCookies } from '@/functions/cookies'
import { UserAccountProps } from '@/components/navbar/utils/interface'

const UserAccount = ({ anchorEl, setAnchorEl, user }: UserAccountProps) => {
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  async function handleLogout() {
    setAnchorEl(null)
    deleteAllCookies()
  }

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem sx={{ minWidth: '200px' }}>
        <Avatar name={user.name.charAt(0)} color="initials" />
        <p className="text-sm pl-3">Minha conta</p>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <MdLogout fontSize="small" />
        </ListItemIcon>
        <p className="text-sm">Sair</p>
      </MenuItem>
    </Menu>
  )
}
export default UserAccount

import React from 'react'
import Image from 'next/image'
import instance from '@/service'
import UserAccount from './user'
import { useRouter } from 'next/navigation'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdAccountCircle } from 'react-icons/md'
import { getUserCookies } from '@/functions/cookies'
import { NavbarComponentProps } from '../../utils/interface'
import { Box, AppBar, Toolbar, IconButton } from '@mui/material'

const NavbarComponent = ({ open, setOpen }: NavbarComponentProps) => {
  const router = useRouter()
  const user = getUserCookies()
  instance.defaults.headers.common.Authorization = `Bearer ${user?.accessToken}`

  const [anchorConta, setAnchorConta] = React.useState<null | HTMLElement>(null)

  const handleClickAccount = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorConta(event.currentTarget)
  }

  console.log('token de acesso gerado: ', user?.accessToken)

  return (
    <Box>
      <AppBar position="fixed" className="!pr-0 !z-50" id="navbar">
        <Toolbar className="bg-gradient-to-r from-cyan-800 to-cyan-900 !min-h-14 !h-14">
          <IconButton
            size="large"
            edge="start"
            sx={{ mr: 2 }}
            color="inherit"
            id="navbar-hamburguer"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
          >
            <HiOutlineMenu size={25} />
          </IconButton>
          <button
            id="navbar-logo"
            onClick={() => router.push('/')}
            className="w-36 h-14"
          >
            <Image src="/logo.png" alt="UPF" width={50} height={50} priority />
          </button>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="end"
            id="navbar-menu-user"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClickAccount}
          >
            <MdAccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      {user && (
        <UserAccount
          anchorEl={anchorConta}
          user={user}
          setAnchorEl={setAnchorConta}
        />
      )}

      <div className="!min-h-14 !h-14" />
    </Box>
  )
}

export default NavbarComponent

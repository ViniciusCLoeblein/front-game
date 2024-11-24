import {
  Box,
  Grid2,
  List,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { NavbarComponentProps } from '../../utils/interface'
import { MdContactSupport, MdSettingsSuggest } from 'react-icons/md'

const SidebarComponent = ({ open, setOpen }: NavbarComponentProps) => {
  const router = useRouter()

  return (
    <Drawer
      open={open}
      transitionDuration={{ enter: 400, exit: 400 }}
      onClose={() => setOpen(false)}
      variant="temporary"
      sx={{
        width: 330,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 330,
          borderRadius: '0px 30px 30px 0px',
          boxSizing: 'border-box',
          background: 'repeating-linear-gradient(#437C99, #437C99, #234158)',
          position: 'relative',
        },
      }}
    >
      <Grid2 className="flex items-center justify-center mt-5 mb-3">
        <Image src="/upf50.png" alt="upf" width={100} height={10} />
      </Grid2>
      <Box sx={{ width: 330, overflow: 'auto', position: 'relative' }}>
        <List component="nav" aria-labelledby="nested-list-subheader">
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                router.push('/usuario/sobre')
                setOpen(false)
              }}
            >
              <ListItemIcon className="!text-white">
                <MdSettingsSuggest />
              </ListItemIcon>
              <ListItemText className="!-ml-4">
                <p className="text-[13.55px] text-white">Sobre</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setOpen(false)
              }}
            >
              <ListItemIcon className="!text-white">
                <MdContactSupport />
              </ListItemIcon>
              <ListItemText className="!-ml-4">
                <p className="text-[13.55px] text-white">Cadastro de mapa</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                setOpen(false)
              }}
            >
              <ListItemIcon className="!text-white">
                <MdContactSupport />
              </ListItemIcon>
              <ListItemText className="!-ml-4">
                <p className="text-[13.55px] text-white">Jogar jogo</p>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}

export default SidebarComponent

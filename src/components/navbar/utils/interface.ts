import { LoginRes } from '@/service/auth/interface'

export interface NavbarComponentProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface UserAccountProps {
  anchorEl: HTMLElement | null
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  user: LoginRes
}

export interface ProfileDialogProps {
  profile: boolean
  setProfile: React.Dispatch<React.SetStateAction<boolean>>
  user: LoginRes
}

export interface MenuSidebarPropsDataSub {
  seqSubmenu: number
  codLinkAplicacao: string
  desAplicacao: string
}

export interface MenuSidebarPropsData {
  icone: string
  desAplicacao: string
  permissoesSubmenu: MenuSidebarPropsDataSub[]
}
export interface MenuSidebarProps {
  data: MenuSidebarPropsData
  open: boolean
  onClick: () => void
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface SwipeableEdgeDrawerProps {
  open: boolean
  onClose: (v: boolean) => void
}

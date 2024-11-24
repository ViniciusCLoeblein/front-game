import { Maps } from '@/service/game/interface'
import { TableColumn } from 'react-data-table-component'

export const columnsLog = () => {
  const rows: TableColumn<Maps>[] = [
    {
      name: 'ID do mapa',
      selector: (v) => v.id,
      center: true,
      sortable: true,
    },
    {
      name: 'Nome do mapa',
      selector: (v) => v.name,
      center: true,
      sortable: true,
    },
    {
      name: 'Quantidade de casas',
      selector: (v) => v.houses,
      center: true,
      sortable: true,
    },
  ]
  return rows
}

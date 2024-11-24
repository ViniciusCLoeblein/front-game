import { TableStyles } from 'react-data-table-component'

export const customStyles: TableStyles = {
  header: {
    style: {
      fontSize: '16px',
      backgroundColor: 'transparent',
      color: '#234158',
    },
  },

  headRow: {
    style: {
      color: '#234158',
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      borderBottom: '1px solid #E2E8F0',
      backgroundColor: '#E2E8F0',
    },
  },
  headCells: {
    style: {
      color: '#234158',
      fontSize: '12px',
      fontWeight: '700',
      letterSpacing: '0.05em',
    },
  },
  rows: {
    style: {
      minHeight: '55px',
      backgroundColor: '#FFFFFF',
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: '#F9FAFB',
      },
    },
  },
  cells: {
    style: {
      fontSize: '12px',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      color: '#374151',
    },
  },
  pagination: {
    style: {
      color: '#2E5C74',
      borderBottom: '0px',
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
      fontSize: '13px',
      letterSpacing: '0.05em',
    },
  },
}

export const paginationComponentOptions = {
  rowsPerPageText: 'Linhas por página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
}

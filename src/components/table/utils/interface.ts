import {
  TableColumn,
  TableProps as TablePropsComponent,
} from 'react-data-table-component'

export interface TableProps<T>
  extends Omit<TablePropsComponent<T>, 'data' | 'columns' | 'onClick'> {
  data: T[]
  columns: TableColumn<T>[]
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

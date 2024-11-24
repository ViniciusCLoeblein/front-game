'use client'

import { cn } from '@/lib'
import Button from '../button'
import dynamic from 'next/dynamic'
import { MdPlaylistAdd } from 'react-icons/md'
import { TableProps } from './utils/interface'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { customStyles, paginationComponentOptions } from './utils/style'

const Loading = dynamic(() => import('../loading'), { ssr: false })

const Table = <T,>({ columns, data, onClick, ...rest }: TableProps<T>) => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    if (!render && typeof window !== 'undefined') {
      setRender(true)
    }
  }, [render])

  return (
    <>
      {render && (
        <div className="px-12 max-lg:px-7">
          <DataTable
            title={
              <div className={cn('w-full flex justify-end space-x-3 pb-2')}>
                <Button
                  disableElevation
                  onClick={onClick}
                  variant="contained"
                  className="!bg-cyan-800"
                  disabled={rest.progressPending}
                  endIcon={<MdPlaylistAdd size={20} />}
                >
                  NOVO
                </Button>
              </div>
            }
            {...rest}
            data={data}
            columns={columns}
            customStyles={customStyles}
            paginationComponentOptions={paginationComponentOptions}
            noDataComponent={
              <div className="flex flex-col justify-center items-center !w-full min-h-96 text-frgsecondary bg-gray-50">
                <Loading
                  animation="not_found"
                  message="Não foram encontrados dados correspondentes à sua busca."
                />
              </div>
            }
            progressComponent={
              <div className="flex flex-col justify-center items-center !w-full min-h-96 text-frgsecondary bg-gray-50">
                <Loading message="Por favor, aguarde enquanto os dados estão sendo carregados." />
              </div>
            }
          />
        </div>
      )}
    </>
  )
}

export default Table

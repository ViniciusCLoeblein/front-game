'use client'

import { useState } from 'react'
import Table from '@/components/table'
import { toast } from 'react-toastify'
import { Pagination } from '@mantine/core'
import DialogMaps from './components/dialog'
import { OpenProps } from './util/interface'
import { columnsLog } from './components/columns'
import { deleteMaps, getMaps } from '@/service/game'
import { useMutation, useQuery } from '@tanstack/react-query'

const Maps: React.FC = () => {
  const [page, setPage] = useState(1)
  const [open, setOpen] = useState<OpenProps>({ active: false })

  const maps = useQuery({
    queryKey: ['getMaps', page],
    queryFn: () => getMaps({ page, size: 10 }),
  })

  const deleteMap = useMutation({
    mutationFn: deleteMaps,
    onSuccess: () => {
      setPage(1)
      toast.success('Cadastro a deletado com sucesso!')
    },
    onError: () => toast.error('Ocorreu um erro!'),
  })

  function remove(id: number) {
    deleteMap.mutate({ id })
  }

  function reload() {
    if (page === 1) {
      maps.refetch()
    } else {
      setPage(1)
    }
    setOpen({ active: false, data: undefined })
  }

  return (
    <>
      <div className="p-8 flex flex-col text-gray-900 items-center">
        <h1 className="text-4xl font-bold text-cyan-800 mb-3">
          Cadastro de Mapas dos Jogos
        </h1>
        <p className="text-xl text-gray-700 mb-12 max-w-screen-2xl text-center">
          Aqui você pode cadastrar, visualizar e gerenciar mapas para os jogos
          que suportamos. Adicione novos mapas, edite informações existentes e
          mantenha tudo atualizado para garantir a melhor experiência para os
          jogadores.
        </p>
      </div>
      <Table
        pagination={false}
        data={maps.data?.data ?? []}
        columns={columnsLog({ remove })}
        onClick={() => setOpen({ active: true })}
        progressPending={maps.isLoading || maps.isFetching}
        onRowClicked={(v) => setOpen({ active: true, data: v })}
      />
      {!maps.isLoading && !maps.isFetching && (
        <div className="w-full flex justify-center pt-5">
          <Pagination
            withEdges
            size="sm"
            value={page}
            color="#437c99"
            onChange={setPage}
            total={maps.data?.totalPages ?? 0}
          />
        </div>
      )}
      {open.active && (
        <DialogMaps
          open={open.active}
          data={open.data}
          setOpen={setOpen}
          reload={reload}
        />
      )}
    </>
  )
}

export default Maps

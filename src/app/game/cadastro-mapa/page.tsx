'use client'

import { useState } from 'react'
import Table from '@/components/table'
import { getMaps } from '@/service/game'
import { Pagination } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { columnsLog } from './components/columns'

const Maps: React.FC = () => {
  const [page, setPage] = useState(0)

  const maps = useQuery({
    queryKey: ['logs', page],
    queryFn: () => getMaps({ page: page + 1, size: 10 }),
  })

  return (
    <>
      <div className="p-8 flex flex-col text-gray-900 items-center">
        <h1 className="text-4xl font-bold text-cyan-800 mb-6">
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
        onClick={() => {}}
        columns={columnsLog()}
        pagination={false}
        data={maps.data?.data ?? [{}]}
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
    </>
  )
}

export default Maps

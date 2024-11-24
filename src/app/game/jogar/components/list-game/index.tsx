import Card from './card'
import { useState } from 'react'
import DialogGame from './dialog'
import { Grid2 } from '@mui/material'
import Button from '@/components/button'
import { Pagination } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { getGames, getMaps } from '@/service/game'
import { ListGameProps } from '../../util/interface'

const ListGame = ({ onReturnGame, onStartGame }: ListGameProps) => {
  const [dialog, setDialog] = useState(false)
  const [page, setPage] = useState(1)

  const games = useQuery({
    queryKey: ['getGames', page],
    queryFn: () => getGames({ page, size: 4 }),
  })

  const maps = useQuery({
    queryKey: ['getMaps'],
    queryFn: () => getMaps({ page: 1, size: 1000 }),
  })

  return (
    <div className="w-full px-8">
      <div className="py-3 flex flex-row-reverse w-full">
        <Button
          disableElevation
          variant="contained"
          onClick={() => setDialog(true)}
        >
          Novo jogo
        </Button>
      </div>
      <Grid2 container spacing={2} columnSpacing={2} columns={4}>
        {games.data?.games.map((v) => (
          <Grid2 key={v.gameId} size={1}>
            <Card data={v} onClick={onReturnGame} />
          </Grid2>
        ))}
      </Grid2>
      {!games.isLoading && !games.isFetching && (
        <div className="w-full flex justify-center pt-5">
          <Pagination
            withEdges
            size="sm"
            value={page}
            color="#437c99"
            onChange={setPage}
            total={games.data?.totalPages ?? 0}
          />
        </div>
      )}
      <DialogGame
        open={dialog}
        setDialog={setDialog}
        onStartGame={onStartGame}
        list={maps.data?.data ?? []}
      />
    </div>
  )
}

export default ListGame

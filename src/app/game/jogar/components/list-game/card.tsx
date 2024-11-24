import {
  Text,
  Badge,
  Group,
  Image,
  Divider,
  Card as CardMantine,
} from '@mantine/core'
import Button from '@/components/button'
import { CardProps } from '../../util/interface'

const Card = ({ data, onClick }: CardProps) => {
  const { winner, player1, player2 } = data

  return (
    <CardMantine shadow="sm" padding="lg" radius="md" withBorder>
      <CardMantine.Section>
        <Image src="/tabuleiro.jpg" height={100} alt="Tabuleiro de jogo" />
      </CardMantine.Section>
      <Group justify="space-between" mt="md" mb="xs">
        <Text>Jogo de Tabuleiro</Text>
        <Badge color={!winner ? 'blue' : 'green'}>
          {!winner ? 'Em andamento' : 'Concluído'}
        </Badge>
      </Group>
      <Text size="sm" color="gray" mb="md">
        Jogadores:
      </Text>
      <Group mb="xs">
        <Text size="sm">{player1.name}</Text>
        <Text size="sm">{player2.name}</Text>
      </Group>
      {winner && (
        <>
          <Divider my="xs" />
          <Text size="sm" color="green">
            Vencedor: {winner}
          </Text>
        </>
      )}
      <p>
        {!winner
          ? 'Continue sua partida e desafie seus amigos! O jogo de tabuleiro oferece uma experiência divertida e estratégica, ideal para todas as idades.'
          : 'O jogo foi concluído. Parabéns ao vencedor!'}
      </p>
      <Button
        color="primary"
        fullWidth
        borderRadius="10px"
        disabled={!!winner}
        onClick={() => onClick(data.gameId)}
      >
        {!winner ? 'Continuar Jogo' : 'Jogo Concluído'}
      </Button>
    </CardMantine>
  )
}

export default Card

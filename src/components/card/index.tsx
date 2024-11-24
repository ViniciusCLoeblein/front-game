import React from 'react'
import { Box, Card as CardMantine } from '@mantine/core'
import { CardProps } from './interface'

const Card = ({ children }: CardProps) => {
  return (
    <CardMantine
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="max-w-screen-md"
    >
      <div className="w-full flex items-center">
        <span className="w-[5px] bg-cyan-700 rounded-full h-full mr-6" />
        <Box>{children}</Box>
      </div>
    </CardMantine>
  )
}

export default Card

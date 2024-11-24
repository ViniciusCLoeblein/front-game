import { cn } from '@/lib'
import Lottie from 'lottie-react'
import { useState, useEffect } from 'react'
import { LoadingProps } from './interface'

const Loading: React.FC<LoadingProps> = ({
  noPadding,
  message,
  animation = 'loading',
  ...rest
}) => {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    const loadAnimationData = async () => {
      try {
        const data = await import(`../../assets/jsons/${animation}.json`)
        setAnimationData(data.default)
      } catch (error) {
        console.error('Error loading animation data:', error)
      }
    }

    loadAnimationData()
  }, [animation])

  return (
    <div
      className={cn(
        'pt-24 p-8 flex items-center justify-center min-h-96 flex-col space-y-6',
        {
          'p-0': noPadding,
        },
      )}
    >
      <Lottie
        {...rest}
        loop
        autoplay
        animationData={animationData}
        className={cn('w-80 max-[425px]:w-56', { hidden: !animationData })}
      />
      <p className="text-frgsecondary text-xs flex justify-center text-center">
        {message}
      </p>
    </div>
  )
}

export default Loading

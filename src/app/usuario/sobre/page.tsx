'use client'

import Card from '@/components/card'

const About = () => {
  return (
    <div className="p-8 flex flex-col text-gray-900 items-center">
      <h1 className="text-4xl font-bold text-cyan-800 mb-6">Sobre</h1>
      <p className="text-xl text-gray-700 mb-12 max-w-3xl text-center">
        Conheça os criadores da aplicação e saiba mais sobre nossas experiências
        e habilidades. Aqui estão um pouco mais sobre nós!
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        <Card>
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-300">
              Desenvolvedor Fullstack Pleno
            </span>
            <p className="text-base text-gray-800 pt-3">
              <b>Nome completo:</b> Vinícius do Carmo Loeblein
            </p>
            <p className="text-sm text-gray-600">
              <b>E-mail:</b> 198779@upf.com.br
            </p>
            <p className="text-sm text-gray-600">
              <b>Sobre mim:</b> Desenvolvedor Fullstack Pleno com experiência em
              Node.js e React, focado em otimizar processos e criar soluções
              inovadoras.
            </p>
          </div>
        </Card>
        <Card>
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-green-300">
              Desenvolvedora Fullstack Junior
            </span>
            <p className="text-base text-gray-800 pt-3">
              <b>Nome completo:</b> Flávia Roseane Alves de Souza
            </p>
            <p className="text-sm text-gray-600">
              <b>E-mail:</b> 198726@upf.com.br
            </p>
            <p className="text-sm text-gray-600">
              <b>Sobre mim:</b> Desenvolvedora Fullstack com foco em Front-End,
              especializada em React e TailwindCSS. Focada em criar interfaces
              intuitivas e de fácil navegação.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default About

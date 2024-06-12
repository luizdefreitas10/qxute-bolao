'use client'

import { Button, Input, Link } from '@nextui-org/react'
import { Open_Sans as OpenSans } from 'next/font/google'
import { useState } from 'react'
import { EyeSlashFilledIcon } from '../../components/EyeSlashFilledIcon/EyeSlashFilledIcon'
import { EyeFilledIcon } from '../../components/EyeFilledIcon/EyeFilledIcon'

const fontOpenSans = OpenSans({ subsets: ['latin'] })

export default function Login() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="h-screen -mb-[148px] w-screen bg-[#1F67CE] flex flex-col">
      <h1
        className={`${fontOpenSans.className} mt-10 text-center text-[18px] font-bold text-white`}
      >
        Bem-vindo de volta!
      </h1>
      <p
        className={`${fontOpenSans.className} text-center text-[12px] font-normal text-white my-2`}
      >
        Estamos felizes em te ver novamente! Conecte-se e aproveite!
      </p>
      <form className="flex flex-col w-[90%] mx-auto">
        <Input
          size="md"
          type="text"
          label="Celular"
          labelPlacement="inside"
          placeholder="(xx)90000-0000"
          className="mt-4"
        />
        <Input
          size="md"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? 'text' : 'password'}
          label="Senha"
          labelPlacement="inside"
          placeholder="Digite sua senha"
          className="mt-4"
        />
        <Link href={'/recover-password'} className="justify-end">
          <p
            className={`text-white text-[12px] my-2 ${fontOpenSans.className}`}
          >
            Esqueci minha senha
          </p>
        </Link>
        <Button
          as={Link}
          href="/home-user"
          className={`mt-6 rounded-3xl bg-[#00409F] text-white text-[14px] ${fontOpenSans.className}`}
        >
          Entrar
        </Button>
        <Button
          as={Link}
          href="/register"
          variant="bordered"
          className={`mt-4 rounded-3xl bg-[#1F67CE] text-white text-[14px] ${fontOpenSans.className} border-solid border-white`}
        >
          Criar conta
        </Button>
      </form>
    </div>
  )
}

'use client'

import { Button, Input, Link, Checkbox } from '@nextui-org/react'
import { Open_Sans as OpenSans } from 'next/font/google'
import { useState } from 'react'
import { EyeSlashFilledIcon } from '../../components/EyeSlashFilledIcon/EyeSlashFilledIcon'
import { EyeFilledIcon } from '../../components/EyeFilledIcon/EyeFilledIcon'

const fontOpenSans = OpenSans({ subsets: ['latin'] })

export default function Register() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="h-screen -mb-[148px] w-screen bg-[#1F67CE] flex flex-col">
      <h1
        className={`${fontOpenSans.className} mt-10 text-center text-[18px] font-bold text-white`}
      >
        Registrar
      </h1>
      <p
        className={`${fontOpenSans.className} text-center text-[12px] font-normal text-white my-2`}
      >
        Registre-se agora e participe!
      </p>
      <form className="flex flex-col w-[90%] mx-auto">
        <Input
          size="md"
          type="text"
          label="Nome completo"
          labelPlacement="inside"
          placeholder="Digite seu nome completo"
          className="mt-4"
        />
        <Input
          size="md"
          type="text"
          label="Data de nascimento"
          labelPlacement="inside"
          placeholder="DD/MM/YYYY"
          className="mt-4"
        />
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
          label="Confirmar senha"
          labelPlacement="inside"
          placeholder="Digite sua senha novamente"
          className="mt-4"
        />

        <Button
          as={Link}
          href="/register"
          className={`mt-6 rounded-3xl bg-[#00409F] text-white text-[14px] ${fontOpenSans.className}`}
        >
          Criar conta
        </Button>

        <Checkbox
          onClick={() => {
            setIsChecked(!isChecked)
            console.log(isChecked)
          }}
          checked={isChecked}
          value={'Eu aceito os Termos de Use e Políticas de Privacidade'}
          className="my-6"
          classNames={{
            label: 'text-white',
          }}
        >
          Eu aceito os{' '}
          <span className="font-bold text-white">Termos de Use</span> e{' '}
          <span className="font-bold text-white">Políticas de Privacidade</span>
        </Checkbox>
      </form>
    </div>
  )
}

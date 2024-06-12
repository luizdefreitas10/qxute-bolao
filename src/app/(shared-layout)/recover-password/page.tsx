'use client'

import { Button, Input, useDisclosure } from '@nextui-org/react'
import { Open_Sans as OpenSans } from 'next/font/google'
import RecoverPasswordModal from '@/app/components/RecoverPasswordModal/RecoverPasswordModal'

const fontOpenSans = OpenSans({ subsets: ['latin'] })

export default function RecoverPassword() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className="h-screen -mb-[148px] w-screen bg-[#1F67CE] flex flex-col">
      <h1
        className={`${fontOpenSans.className} mt-10 text-center text-[18px] font-bold text-white`}
      >
        Esqueceu a senha?
      </h1>
      <p
        className={`${fontOpenSans.className} text-center text-[12px] font-normal text-white my-2`}
      >
        Insira o número do celular cadastrado na sua conta, que te enviaremos um
        código SMS para redefinição da senha.
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

        <Button
          onPress={onOpen}
          className={`mt-6 rounded-3xl bg-[#00409F] text-white text-[14px] ${fontOpenSans.className}`}
        >
          Enviar SMS de redefinição
        </Button>
      </form>
      <RecoverPasswordModal isOpen={isOpen} onClose={onOpenChange} />
    </div>
  )
}

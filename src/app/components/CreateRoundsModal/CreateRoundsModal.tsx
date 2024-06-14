import { useEventsContext } from '@/context/EventsContext'
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Image,
} from '@nextui-org/react'
import { useState } from 'react'

interface CloseButtonprops {
  onClose: () => void
}

export default function CreateRoundsModal({ onClose }: CloseButtonprops) {
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true)
  const { handleNextModal, handlePreviousModal } = useEventsContext()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    console.log(value)
    console.log(value.length)
    if (value.length > 3) {
      setIsDisabledButton(false)
    }
  }

  return (
    <>
      <ModalHeader className="flex space-x-2 items-center">
        <Image src="/stadiumicon.svg" alt="stadium icon" />
        <h1>2. Rodadas </h1>
      </ModalHeader>
      <ModalBody className="space-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur. Nulla ac nisl pellentesque
          netus diam. Vel urna mattis.
        </p>

        <Input
          type="text"
          size="md"
          label="Nome da rodada"
          placeholder="Ex: 11ª Rodada"
          onChange={(e) => handleInputChange(e)}
        />
      </ModalBody>
      <ModalFooter className="flex flex-col space-y-4">
        <Button
          isDisabled={isDisabledButton}
          onClick={handleNextModal}
          className={`text-[14px] text-white font-bold bg-[#00764B] rounded-full`}
        >
          Avançar
        </Button>
        <Button
          onClick={handlePreviousModal}
          variant="bordered"
          className={`text-[14px] text-white font-bold border-white rounded-full`}
        >
          Voltar
        </Button>
        <Button
          onPress={onClose}
          className={`text-[14px] text-white font-bold bg-[#E40000] rounded-full`}
        >
          Fechar
        </Button>
      </ModalFooter>
    </>
  )
}

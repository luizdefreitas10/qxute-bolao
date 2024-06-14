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

export default function CreateTeamsModal({ onClose }: CloseButtonprops) {
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(false)
  const { handleNextModal, handlePreviousModal } = useEventsContext()

  const teamsInputLabels = [
    'Time 1',
    'Time 2',
    'Time 3',
    'Time 4',
    'Time 5',
    'Time 6',
    'Time 7',
    'Time 8',
  ]

  return (
    <>
      <ModalHeader className="flex space-x-2 items-center">
        <Image src="/sportsicon.png" alt="stadium icon" />
        <h1>3. Times </h1>
      </ModalHeader>
      <ModalBody className="space-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur. Nulla ac nisl pellentesque
          netus diam. Vel urna mattis.
        </p>
        <div className="space-y-10">
          {teamsInputLabels.map((label) => (
            <Input
              key={label}
              label={<label className="text-white font-bold">{label}</label>}
              placeholder="Nome do time"
              labelPlacement="outside"
              type="text"
            />
          ))}
        </div>
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

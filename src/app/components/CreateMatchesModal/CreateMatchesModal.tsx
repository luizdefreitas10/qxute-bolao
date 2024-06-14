import { useEventsContext } from '@/context/EventsContext'
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
  Image,
} from '@nextui-org/react'
import { useState } from 'react'

interface CloseButtonprops {
  onClose: () => void
}

export default function CreateMatchesModal({ onClose }: CloseButtonprops) {
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(false)
  const { handlePreviousModal } = useEventsContext()

  const numberOfMatches: string[] = [
    'Partida 1',
    'Partida 2',
    'Partida 3',
    'Partida 4',
  ]

  return (
    <>
      <ModalHeader className="flex space-x-2 items-center">
        <Image src="/sportsicon.png" alt="stadium icon" />
        <h1>4. Partidas </h1>
      </ModalHeader>
      <ModalBody className="space-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur. Nulla ac nisl pellentesque
          netus diam. Vel urna mattis.
        </p>
        <div className="space-y-10">
          {numberOfMatches.map((match) => (
            <div key={match} className="space-y-4">
              <h1>{match}</h1>
              <Select
                classNames={{
                  selectorIcon: 'text-black',
                }}
                color="default"
                label="Selecione a rodada"
              >
                <SelectItem key={match} value={match} className="text-black">
                  {match}
                </SelectItem>
              </Select>
              <Input
                type="text"
                placeholder="Digite o horário da partida"
                label="Horário"
              />
              <Select
                classNames={{
                  selectorIcon: 'text-black',
                }}
                color="default"
                label="Selecione o time da casa"
              >
                <SelectItem key={match} value={match} className="text-black">
                  {match}
                </SelectItem>
              </Select>
              <Select
                classNames={{
                  selectorIcon: 'text-black',
                }}
                color="default"
                label="Selecione o time visitante"
              >
                <SelectItem key={match} value={match} className="text-black">
                  {match}
                </SelectItem>
              </Select>
            </div>
          ))}
        </div>
      </ModalBody>
      <ModalFooter className="flex flex-col space-y-4">
        <Button
          isDisabled={isDisabledButton}
          onPress={onClose}
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

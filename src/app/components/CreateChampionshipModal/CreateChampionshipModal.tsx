import { useEventsContext } from '@/context/EventsContext'
import {
  ModalHeader,
  ModalBody,
  Select,
  SelectItem,
  Checkbox,
  ModalFooter,
  Button,
  Input,
  Image,
} from '@nextui-org/react'
import { Open_Sans as OpenSans } from 'next/font/google'
import { useEffect, useState } from 'react'

const fontOpenSans = OpenSans({ subsets: ['latin'] })

interface ChampionshipProps {
  id: number
  name: string
}

interface CloseButtonprops {
  onClose: () => void
}

export default function CreateChampionshipModal({ onClose }: CloseButtonprops) {
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true)

  const {
    setSelectedChampionship,
    setIsDisabledInput,
    isDisabledInput,
    isDisabledCheckbox,
    setNewChampionshipName,
    handleNextModal,
    selectedChampionship,
    newChampionshipName,
  } = useEventsContext()

  useEffect(() => {
    const shouldEnableButton =
      selectedChampionship !== null ||
      (!isDisabledCheckbox && newChampionshipName.length >= 5)
    setIsDisabledButton(!shouldEnableButton)
  }, [selectedChampionship, isDisabledCheckbox, newChampionshipName])

  const championships: ChampionshipProps[] = [
    {
      id: 1,
      name: 'Campeonato Pernambucano',
    },
    {
      id: 2,
      name: 'Campeonato Brasileiro',
    },
    {
      id: 3,
      name: 'Campeonato Japones',
    },
  ]

  return (
    <>
      <ModalHeader className="flex space-x-2 items-center">
        <Image src="/trophyicon.svg" alt="trophy icon" />
        <h1>1. Campeonato </h1>
      </ModalHeader>
      <ModalBody className="space-y-2">
        <p>
          Lorem ipsum dolor sit amet consectetur. Nulla ac nisl pellentesque
          netus diam. Vel urna mattis.
        </p>
        <Select
          onChange={(e) => setSelectedChampionship(Number(e.target.value))}
          classNames={{
            selectorIcon: 'text-black',
          }}
          color="default"
          label="Selecione o campeonato"
          className="w-full"
        >
          {championships.map((championship) => (
            <SelectItem
              key={championship.id}
              value={championship.id}
              className="text-black"
            >
              {championship.name}
            </SelectItem>
          ))}
        </Select>
        <Checkbox
          onClick={() => setIsDisabledInput(!isDisabledInput)}
          isDisabled={isDisabledCheckbox}
          size="lg"
          className="text-[12px]"
          classNames={{
            label: 'text-white',
          }}
        >
          Novo campeonato
        </Checkbox>
        <Input
          isDisabled={isDisabledInput}
          type="text"
          size="md"
          label="Nome do campeonato"
          placeholder="Digite o nome do campeonato"
          onChange={(e) => setNewChampionshipName(e.target.value)}
        />
      </ModalBody>
      <ModalFooter className="flex flex-col space-y-4">
        <Button
          isDisabled={isDisabledButton}
          onClick={handleNextModal}
          className={`${fontOpenSans.className} text-[14px] text-white font-bold bg-[#00764B] rounded-full`}
        >
          Avançar
        </Button>
        <Button
          onPress={onClose}
          className={`${fontOpenSans.className} text-[14px] text-white font-bold bg-[#E40000] rounded-full`}
        >
          Fechar
        </Button>
      </ModalFooter>
    </>
  )
}

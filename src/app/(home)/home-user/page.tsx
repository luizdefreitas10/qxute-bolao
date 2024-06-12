'use client'

import MyHistoryModal from '@/app/components/MyHistoryModal/MyHistoryModal'
import {
  Button,
  Image,
  Radio,
  RadioGroup,
  useDisclosure,
} from '@nextui-org/react'
import { Open_Sans as OpenSans } from 'next/font/google'

const fontOpenSans = OpenSans({ subsets: ['latin'] })

export default function HomeUser() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const players = [
    {
      name: 'Jogador 1',
      image: '/sportlogo.svg',
    },
    {
      name: 'Jogador 2',
      image: '/sportlogo.svg',
    },
    {
      name: 'Jogador 3',
      image: '/sportlogo.svg',
    },
    {
      name: 'Jogador 4',
      image: '/sportlogo.svg',
    },
  ]

  return (
    <div
      className={`flex flex-col mx-auto w-[100%] h-full bg-white ${fontOpenSans.className}`}
    >
      <h1
        className={`text-center text-[#00409F] text-[18px] font-bold ${fontOpenSans.className} mt-10`}
      >
        Resultado correto
      </h1>
      <p className="text-[#00409F] mt-2 mb-4 text-center">
        Lorem ipsum dolor sit amet consectetur. Laoreet.
      </p>
      <div className="flex flex-col p-4 bg-[#1F67CE] rounded-lg w-[90%] mx-auto">
        <div className="flex w-full justify-between">
          <div className="flex space-x-2">
            <Image src="/sportsicon.png" alt="sports icon" />
            <h1 className="text-white text-[12px] font-normal">11ª Rodada</h1>
          </div>
          <h1 className="text-white text-[12px] font-normal">Junho, 21h30</h1>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="flex flex-col space-y-4">
            <h1 className="text-center">Ceará</h1>
            <div className="flex justify-center items-center">
              <Button
                variant="bordered"
                className="text-white border-solid border-[1px] border-white bg-[#00409F]"
              >
                -
              </Button>
              <h1 className="mx-3 text-[16px text-white]">0</h1>
              <Button
                variant="bordered"
                className="text-white border-solid border-[1px] border-white bg-[#00409F]"
              >
                +
              </Button>
            </div>
          </div>
          <h1 className="mx-4">X</h1>
          <div className="flex flex-col space-y-4">
            <h1 className="text-center">Sport</h1>
            <div className="flex justify-center items-center">
              <Button
                variant="bordered"
                className="text-white border-solid border-[1px] border-white bg-[#00409F]"
              >
                -
              </Button>
              <h1 className="mx-3 text-[16px text-white]">0</h1>
              <Button
                variant="bordered"
                className="text-white border-solid border-[1px] border-white bg-[#00409F]"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
      <h1
        className={`text-center text-[#00409F] text-[18px] font-bold ${fontOpenSans.className} mt-10`}
      >
        Quem fará o último gol do Sport?
      </h1>
      <p className="text-[#00409F] mt-2 mb-4 text-center">
        Lorem ipsum dolor sit amet consectetur. Laoreet.
      </p>
      <div className="flex flex-col p-4 bg-[#1F67CE] rounded-lg w-[90%] mx-auto">
        <div className="flex w-full justify-between">
          <div className="flex space-x-2">
            <Image src="/sportsicon.png" alt="sports icon" />
            <h1 className="text-white text-[12px] font-normal">
              11ª Rodada - Ceará X Sport
            </h1>
          </div>
          <h1 className="text-white text-[12px] font-normal">Junho, 21h30</h1>
        </div>
        <div className="flex space-x-2 items-center mt-4">
          <Image
            src="/sportlogo.svg"
            alt="sport logo"
            className="w-[28px] h-[28px]"
          />
          <h1 className="text-white text-[12px] font-normal">
            Jogadores - Sport
          </h1>
        </div>
        <hr className="w-full h-[1px] bg-white mt-4" />
        <RadioGroup className="mt-4 flex">
          {players.map((player, index) => (
            <div
              className="bg-[#00409F] flex justify-between items-center p-2 space-x-2 rounded-sm"
              key={`${player.name}-${index + 1}`}
            >
              <div className="flex justify-center items-center space-x-2">
                <Image src={player.image} alt={player.name} />
                <h1 className="">{player.name}</h1>
              </div>
              <Radio
                className="custom-radio-order justify-between"
                value={`Jogador ${index + 1}`}
                classNames={{
                  label: 'hidden',
                }}
              >
                {player.name}
              </Radio>
            </div>
          ))}
        </RadioGroup>
      </div>
      <Button
        onPress={onOpen}
        startContent={<Image src="/historyicon.svg" alt="history" />}
        className={`${fontOpenSans.className} rounded-full bg-[#00764B] text-white text-[14px] font-bold flex justify-center items-center px-4 py-3 my-6 w-[90%] mx-auto`}
      >
        Meu histórico
      </Button>
      <div className="bg-[#00409F] w-full h-[250px] flex justify-center items-center">
        <div className="w-[90%] bg-black h-[160px] rounded-xl flex justify-center items-center">
          <h1>betvip banner</h1>
        </div>
      </div>
      <MyHistoryModal isOpen={isOpen} onClose={onOpenChange} />
    </div>
  )
}

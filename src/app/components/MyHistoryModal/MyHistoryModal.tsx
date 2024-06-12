import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Image,
} from '@nextui-org/react'
import { Open_Sans as OpenSans } from 'next/font/google'

const fontOpenSans = OpenSans({ subsets: ['latin'] })

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MyHistoryModal({ isOpen, onClose }: CustomModalProps) {
  return (
    <Modal
      scrollBehavior="outside"
      isOpen={isOpen}
      onOpenChange={onClose}
      size="4xl"
      closeButton={<img src="/closeicon.png" alt="close" />}
    >
      <ModalContent className={`${fontOpenSans.className} bg-[#1F67CE]`}>
        {(onClose) => (
          <>
            <ModalHeader className="flex space-x-2 items-center">
              <Image src="/historyicon.svg" alt="mail icon" />
              <h1>Meu histórico</h1>
            </ModalHeader>
            <ModalBody className="space-y-2">
              <p>
                Confira abaixo o histórico dos resultados dos seus palpites!
              </p>
              <Button
                variant="bordered"
                startContent={<Image src="/filtericon.svg" alt="filter" />}
                className="font-bold text-white text-[14px] border-white rounded-full"
              >
                Filtrar por
              </Button>
              <div className="flex justify-around mt-4">
                <div className="flex flex-col justify-center items-center space-y-2">
                  <h1>Total de acertos</h1>
                  <span className="bg-[#00764B] w-[50px] flex justify-center items-center py-2 rounded-[4px] border-white border-[1px] border-solid">
                    1
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center space-y-2">
                  <h1>Total de erros</h1>
                  <span className="bg-[#E40000] w-[50px] flex justify-center items-center py-2 rounded-[4px] border-white border-[1px] border-solid">
                    1
                  </span>
                </div>
              </div>
              <div className="flex flex-col p-4 bg-[#00409F] rounded-lg w-[90%] mx-auto">
                <div className="flex w-full justify-between">
                  <div className="flex space-x-2">
                    <Image src="/sportsicon.png" alt="sports icon" />
                    <h1 className="text-white text-[12px] font-normal">
                      11ª Rodada
                    </h1>
                  </div>
                  <h1 className="text-white text-[12px] font-normal">
                    Junho, 21h30
                  </h1>
                </div>
                <div className="flex justify-around items-center mt-4">
                  <div className="flex flex-col space-y-4">
                    <h1 className="text-center">Ceará</h1>
                    <div className="flex justify-center items-center">
                      <h1 className="mx-3 text-[16px text-white] font-semibold">
                        2
                      </h1>
                    </div>
                  </div>
                  <h1 className="mx-4">X</h1>
                  <div className="flex flex-col space-y-4">
                    <h1 className="text-center">Sport</h1>
                    <div className="flex justify-center items-center">
                      <h1 className="mx-3 text-[16px text-white] font-semibold">
                        1
                      </h1>
                    </div>
                  </div>
                </div>
                <hr className="w-full h-[1px] border-t-[1px] border-t-[#1F67CE] mt-4" />
                <h1 className="text-[12px] font-semibold text-white text-center mt-4">
                  Marcador do último gol do Sport:
                </h1>
                <h1 className="flex justify-center items-center gap-2 mt-4">
                  <Image src="/player.png" alt="player" />
                  Jogador 1
                </h1>
                <hr className="w-full h-[1px] border-t-[1px] border-t-[#1F67CE] mt-4" />
                <h1 className="flex justify-center items-center gap-2 mt-4">
                  <Image src="/checkicon.svg" alt="check" />
                  Você acertou o palpite!
                </h1>
              </div>
              <div className="flex flex-col p-4 bg-[#00409F] rounded-lg w-[90%] mx-auto">
                <div className="flex w-full justify-between">
                  <div className="flex space-x-2">
                    <Image src="/sportsicon.png" alt="sports icon" />
                    <h1 className="text-white text-[12px] font-normal">
                      10ª Rodada
                    </h1>
                  </div>
                  <h1 className="text-white text-[12px] font-normal">
                    Maio, 21h30
                  </h1>
                </div>
                <div className="flex justify-around items-center mt-4">
                  <div className="flex flex-col space-y-4">
                    <h1 className="text-center">Santa Cruz</h1>
                    <div className="flex justify-center items-center">
                      <h1 className="mx-3 text-[16px text-white] font-semibold">
                        2
                      </h1>
                    </div>
                  </div>
                  <h1 className="mx-4">X</h1>
                  <div className="flex flex-col space-y-4">
                    <h1 className="text-center">Sport</h1>
                    <div className="flex justify-center items-center">
                      <h1 className="mx-3 text-[16px text-white] font-semibold">
                        1
                      </h1>
                    </div>
                  </div>
                </div>
                <hr className="w-full h-[1px] border-t-[1px] border-t-[#1F67CE] mt-4" />
                <h1 className="flex justify-center items-center gap-2 mt-4">
                  <Image src="/wrongicon.svg" alt="check" />
                  Você errou o palpite!
                </h1>
              </div>
            </ModalBody>
            <ModalFooter className="flex flex-col space-y-4">
              <Button
                onPress={onClose}
                className={`${fontOpenSans.className} text-[14px] text-white font-bold bg-[#E40000] rounded-full`}
              >
                Fechar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

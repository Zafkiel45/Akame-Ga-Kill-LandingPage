import Image from "next/image"
import Logo_Akame from '../../../public/images/logoK.webp'

export const MainInfos = () => {
    return (
        <div className="absolute z-0 top-0 left-0 p-10 h-750 gap-9 py-14 items-start flex flex-col justify-start bg-no-repeat w-screen object-cover bg-[url('../../public/images/banner.webp')]">
            <figure className="relative w-2/6 h-2/6 object-contain">
                <Image src={Logo_Akame} fill={true} />
            </figure>
            <div className="w-3/5 z-10 "> 
                <p className="text-white font-bold w-full text-4xl">
                    Acompanhe a jornada de Tatsumi
                    e a Night Raider em busca de tornar
                    o império um Lugar melhor agora Mesmo!
                </p>
            </div>
            <button className="w-60 rounded-md text-white font-medium transition-colors hover:bg-black bg-red-600 p-3">
                Assista Agora
            </button>
        </div>
    )
}
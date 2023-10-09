import Image from "next/image"
import Logo_Akame from '../../../public/images/logoK.webp'

export const MainInfos = () => {
    return (
        <div className="z-0 top-0 left-0 p-10 h-[797px] gap-9 py-14 items-start flex flex-col justify-start bg-no-repeat w-screen object-cover bg-cover bg-center bg-[url('../../public/images/banner.webp')]">
            <figure className="relative right-24 w-3/6 h-3/6 object-cover">
                <Image src={Logo_Akame} fill={true} />
            </figure>
            <div className="w-3/5 z-10 relative bottom-32"> 
                <p className="text-white font-bold w-full text-4xl">
                    Acompanhe a jornada de Tatsumi
                    e a Night Raider em busca de tornar
                    o império um Lugar melhor agora Mesmo!
                </p>
            </div>
            <button className="w-60 rounded-md relative bottom-32 hover:text-red-claro-text text-white font-medium transition-colors hover:bg-black bg-red-claro p-3">
                Assista Agora
            </button>
        </div>
    )
}
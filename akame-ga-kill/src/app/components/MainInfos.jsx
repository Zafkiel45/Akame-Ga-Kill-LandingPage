import Image from "next/image"
import Logo_Akame from '../../../public/images/logoK.webp'

export const MainInfos = () => {
    return (
        <div className="z-0 p-10 font-semibold text-white  h-[797px] gap-9 py-14 items-start flex flex-col justify-start bg-no-repeat w-screen bg-cover bg-center bg-[url('../../public/images/banner.webp')]">
            <figure className="relative right-[5rem] w-[700px] h-[408px]">
                <Image className="object-cover" src={Logo_Akame} alt=""  fill={true} />
            </figure>
            <div className="w-3/5 z-10 relative bottom-[10rem]"> 
                <p className="w-full text-4xl">
                    Acompanhe a jornada de Tatsumi
                    e a Night Raider em busca de tornar
                    o império um Lugar melhor agora Mesmo!
                </p>
            </div>
            <button className="w-60 rounded-md relative bottom-[9rem] transition-colors hover:bg-black bg-red-claro p-3">
                Assista Agora
            </button>
        </div>
    )
}
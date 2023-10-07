import Image from "next/image"
import Night_logo from '../../../public/images/logo.webp'

export const Sinopse = () => {
    return (
        <div className="relative w-screen py-28 px-4 bg-black" >
            <h1 className="text-white text-center p-7 font-bold text-3xl">Sinopse</h1>
            <p className="text-white font-bold text-justify px-7 text-lg">
                Tatsumi é um jovem guerreiro que acaba de ser enganado e 
                roubado por uma linda mulher, mas sua má sorte parece ter 
                acabado quando uma garota igualmente linda o convida para 
                se hospedar em sua mansão. No entanto, um grupo de assassinos 
                invade a mansão para eliminar a família da garota, e cabe ao 
                rapaz proteger sua anfitriã da fria assassina chamada Akame. 
                Mas neste mundo as coisas não são o que parecem... Após descobrir 
                a verdade por trás do império, Tasumi se junta a Night Raider com 
                o objetivo de tornar o império um lugar melhor... Ao longo da jornada,
                Tatsumi, começar a aprender e entender melhor como funciona o império e 
                aos poucos vai mudando... 
            </p>
            <Image className="left-[42%] opacity-[0.3] top-1/3 absolute object-cover" height={250} width={250} src={Night_logo} />
        </div>
    )
}
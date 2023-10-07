import Image from "next/image"
import Night_logo from '../../../public/images/logo.webp'

export const Sinopse = () => {
    return (
        <div className="relative w-screen py-28 px-4 bg-black" >
            <h1 className="text-white text-center p-7 font-bold text-3xl">Sinopse</h1>
            <p className="text-white font-bold text-justify px-7 text-lg">
                Tatsumi é um lutador que sai para a Capital em busca de uma maneira de ganhar dinheiro para ajudar a sua aldeia pobre, apenas para descobrir a corrupção profunda lá. Depois de ser vítima de um assalto por uma mulher e perder todo o seu dinheiro, Tatsumi é levado por uma menina aristocrática nobre com o nome de Aria. Na noite seguinte, o lugar de Aria é atacado por um grupo de assassinos conhecidos como Noite Raid.Enquanto Tatsumi no primeiro tenta defender 
                Aria do Akame assassino, um outro membro do grupo pára a luta. Ela revela que Aria 
                raptou vários aldeões e tortura-los para se divertir. Vendo o potencial no Tatsumi, Noite
                Raid convida o rapaz para o seu aviso grupo que, independentemente de como eles 
                querem assassino pessoas corrompidas, eles são assassinos. Tatsumi aceita, a fim de se tornarmais forte e proteger sua aldeia. Como resultado, Tatsumi começa a treinar, não só para se tornar um lutador melhor, mas assim como assassino frio.Em sua luta contra o Império, Noite Raid começa antagonizar uma organização conhecida como The Jaegars liderados por Edese, 
                o lutador mais poderoso do Império.
            </p>
            <Image className="left-[42%] opacity-[0.3] top-1/3 absolute object-cover" height={250} width={250} src={Night_logo} />
        </div>
    )
}
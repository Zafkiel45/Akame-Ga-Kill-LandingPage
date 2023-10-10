import Image from "next/image"
import Logo from '../../../public/images/esdeath banner.png'

export const Detalhes = () => {
    return (
        <div className="flex justify-between h-[450px] gap-2 w-screen bg-black text-white font-medium">
            <div className="w-1/2 p-5 bg-black ml-8 mt-14 text-2xl text-justify rounded-3xl ">
                <p>
                    Akame ga Kill é uma obra de Tetsuya Tashiro com seu primeiro sendo publico em 
                    20 de março de 2010 até 22 de dezembro de de 2016. A obra foi compilada em 15 
                    volumes. O Anime foi produzido pelo os estúdios White Fox em 2014 sendo muito 
                    bem recebido pelo os fãs. Sendo um sucesso de vendas e sendo considerado uns dos 
                    animes mais populares da atualiade. Vale enfatizar que Akame Ga Kill é 
                    violento. Portanto, se faz necessário procurar a classificação indicatória da 
                    obra antes de Assistir. 
                </p>
            </div>
            <div className="relative h-[100%] w-[25rem]">
                <Image className="object-cover" src={Logo} fill={true} alt="" />
            </div>
        </div>
    )
}
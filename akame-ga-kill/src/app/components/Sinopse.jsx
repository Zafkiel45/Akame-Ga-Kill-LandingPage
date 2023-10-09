import Image from "next/image"
import Night_logo from '../../../public/images/logo.webp'

export const Sinopse = () => {
    return (
        <div className="text-white font-bold relative w-screen py-28 px-4 bg-black" >
            <h1 className="text-center p-7 text-3xl">Sinopse</h1>
            <p className="text-justify px-7 text-lg">
                Night Raid é o ramo de assassinatos secretos do Exército Revolucionário, 
                uma revolta montada para derrubar o primeiro-ministro Honest, cuja avareza 
                e ganância pelo poder o levaram a tirar vantagem da inexperiência do imperador 
                criança. Sem um líder forte e benevolente, o resto da nação afunda-se na 
                pobreza, na discórdia e na ruína. Embora os membros do Night Raid sejam todos 
                assassinos experientes, eles entendem que tirar vidas está longe de ser louvável
                e que provavelmente enfrentarão retribuição ao eliminarem impiedosamente qualquer
                um que esteja no caminho da revolução.
            <br />
                O mais novo membro deste alegre bando de assassinos é Tatsumi, um garoto ingênuo
                 de uma vila remota que embarcou em uma jornada para ajudar sua empobrecida cidade
                  natal e foi conquistado não apenas pelos ideais de Night Raid, mas também por 
                  sua determinação. Akame ga Kill! segue Tatsumi enquanto ele luta contra o 
                  Império e fica cara a cara com armas poderosas, assassinos inimigos, desafios à 
                  sua própria moral e valores e, em última análise, o que realmente significa ser 
                  um assassino com uma causa.
            </p>
            <Image className="left-[42%] opacity-[0.3] top-1/3 absolute object-cover" height={250} width={250} src={Night_logo} />
        </div>
    )
}
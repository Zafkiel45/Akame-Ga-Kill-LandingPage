'use client'
// Imagens
import Akame from '../../../public/images/Akam.webp'
import Bulat from '../../../public/images/bulat.webp'
import Chelsea from '../../../public/images/Chelsea.webp'
import Esdeath from '../../../public/images/Esdeath.webp'
import Leone from '../../../public/images/Leone.webp'
import Lubbock from '../../../public/images/lubbock.webp'
import Mine from '../../../public/images/Mine.webp'
import Najenda from '../../../public/images/Najenda.webp'
import Shelly from '../../../public/images/shelly.webp'
import Tatsumi from '../../../public/images/tatsumi.webp'
import Image from 'next/image'
//SVG
import Arrow_right from '../../../public/svg/arrow-right.svg'
import Arrow_Left from '../../../public/svg/arrow-left.svg'
// Hooks
import { useState, useEffect, useRef } from 'react'


export const Personagens = () => {

    const CarrosselRef = useRef(null);
    const [controle, setControle] = useState(0)

    useEffect(() => {
        const elementos = CarrosselRef.current.childElementCount;
        const WhidthAtual = CarrosselRef.current.clientWidth;

        if(controle >= elementos) {
            CarrosselRef.current.scrollLeft = 0
            setControle(0)
        } else if(controle < 0) {
            CarrosselRef.current.scrollLeft = (elementos - 1) * WhidthAtual
            setControle(elementos -1)
        }
    }, [controle])

    const NextImg = () => {
        const WhidthAtual = CarrosselRef.current.clientWidth;
        let scrollX = CarrosselRef.current.scrollLeft

        CarrosselRef.current.scrollLeft = scrollX + WhidthAtual
        setControle(() => controle + 1)
    }
    const PrevImg  = () => {
        let WhidthAtual = CarrosselRef.current.clientWidth;
        let scrollX = CarrosselRef.current.scrollLeft

        CarrosselRef.current.scrollLeft = scrollX - WhidthAtual
        setControle(() => controle - 1)
    }

    return (
        <div className='flex justify-between items-center bg-black p-32 py-10'>
            <button onClick={PrevImg} className='flex justify-center items-center text-white rounded-full bg-red-950 w-14 h-14'>
                <Image src={Arrow_Left} height={30} width={30} quality={10} />
            </button>
            <div ref={CarrosselRef} className='flex transition-all relative overflow-hidden w-[684px] h-[330px] '>
                {/* Tatsumi */}
                <div className='flex w-[684px] h-[330px]'>
                    <div className='h-[330px] w-[300px]'>
                        <figure className='relative h-full w-full'>
                            <Image className='object-cover rounded-tl-lg rounded-bl-lg' src={Tatsumi} fill={true} />
                        </figure>
                    </div>
                    <div className='text-white w-96 bg-red-950 rounded-tr-lg rounded-br-lg'>
                        <h1 className='text-center font-semibold text-lg p-2 rounded-tr-lg bg-red-claro'>Tatsumi</h1>
                        <p className='p-4 font-medium text-justify'>
                            Tatsumi é um garoto gentil e corajoso que saiu rumo a capital em 
                            busca de melhorar as condições do seu vilarejo junto com seus dois 
                            grandes amigos. Após passar por diversas adversidades na capital que
                            mudou completamente a vida de Tatsumi, ele se junta a Night Raider como 
                            um novo membro do grupo. Com a sua entrada ao grupo da Night Raider, Tatsumi se 
                            move rumo à uma nova página em sua vida...
                        </p>
                    </div>
                </div>
                {/* akame */}
                <div className='flex w-[684px] h-[330px]'>
                    <div className='h-[330px] w-[300px]'>
                        <figure className='relative h-full w-full'>
                            <Image className='object-cover rounded-t-sm rounded-bl-sm' src={Akame} fill={true} />
                        </figure>
                    </div>
                    <div className='text-white w-96 bg-red-950 rounded-tr-sm rounded-br-sm'>
                        <h1 className='text-center font-semibold text-lg p-2 bg-red-claro'>Akame</h1>
                        <p className='p-4 font-medium text-justify'>
                            Akame é uma membra veterana da Night Raider. Ágil, calma e precisa. 
                            não há um único alvo que escapou de sua lâmina. Junto com sua espada, 
                            Murasame, Akame domina a arte do assassinato como ninguém! E está determina 
                            a criar um reino melhor para os seus Hábitantes... 
                        </p>
                    </div>
                </div>
                {/* Bulat */}
                <div className='flex w-[684px] h-[330px]'>
                    <div className='h-[330px] w-[300px]'>
                        <figure className='relative h-full w-full'>
                            <Image className='object-cover rounded-t-sm rounded-bl-sm' src={Bulat} fill={true} />
                        </figure>
                    </div>
                    <div className='text-white w-96 bg-red-950 rounded-tr-sm rounded-br-sm'>
                        <h1 className='text-center font-semibold text-lg p-2 bg-red-claro'>Bulat</h1>
                        <p className='p-4 font-medium text-justify'>
                            Um dos membros mais antigos da Night Raid, Bulat, é um guerreiro 
                            muito poderoso que foi treinando por um comandante de um alto escalão. 
                            Após controvércias com seu mestre, Bulat se junta a Night Raider. Bulat 
                            é um dos membros responsável por ensinar a arte do combate a Tatsumi, 
                            desepemhando um papel fundamental no seu crescimento. Bulat porta a incursio, 
                            uma armadura feito da carne de um dragão ainda vivo, proporcionando uma 
                            resistência e força gigantesca.
                        </p>
                    </div>
                </div>
                {/* Chelsea */}
                <div className='flex w-[684px] h-[330px]'>
                    <div className='h-[330px] w-[300px]'>
                        <figure className='relative h-full w-full'>
                            <Image className='object-cover rounded-t-sm rounded-bl-sm' src={Chelsea} fill={true} />
                        </figure>
                    </div>
                    <div className='text-white w-96 bg-red-950 rounded-tr-sm rounded-br-sm'>
                        <h1 className='text-center font-semibold text-lg p-2 bg-red-claro'>Chelsea</h1>
                        <p className='p-4 font-medium text-justify'>
                            Chelsea é um dos membros mais recentes da Night Raider. Entretanto, 
                            Chelsea possui grandes Habilidades na arte do assassinato desde que 
                            fazia parte de um grupo antigo que hoje foi esquecido... Chelsea 
                            demonstra maestria na prática de infiltração e execusão, assassinando 
                            seus alvos rapidamente. 
                        </p>
                    </div>
                </div>
                {/* Esdeath */}
                <div className='flex w-[684px] h-[330px]'>
                    <div className='h-[330px] w-[300px]'>
                        <figure className='relative h-full w-full'>
                            <Image className='object-cover rounded-t-sm rounded-bl-sm' src={Esdeath} fill={true} />
                        </figure>
                    </div>
                    <div className='text-white w-96 bg-red-950 rounded-tr-sm rounded-br-sm'>
                        <h1 className='text-center font-semibold text-lg p-2 bg-red-claro'>Esdeath</h1>
                        <p className='p-4 font-medium text-justify'>
                            Uma das comandantes do Reino, Esdeath é considerada a mais forte 
                            do reino por grande parcela da população. Cruel, fria e poderosa, 
                            não há nada que Esdeath não consiga conquistar no campo de batalha. 
                            Desde pequena foi treinada para ser uma guerreira, e após anos de 
                            treinamento, derrotou todos em seu caminha, até chegar ao alto 
                            escalão do Reino e adquirindo sua poderosa Tengo...
                        </p>
                    </div>
                </div>
                {/* Leone */}
                <div className='flex w-[684px] h-[330px]'>
                    <div className='h-[330px] w-[300px]'>
                        <figure className='relative h-full w-full'>
                            <Image className='object-cover rounded-t-sm rounded-bl-sm' src={Leone} fill={true} />
                        </figure>
                    </div>
                    <div className='text-white w-96 bg-red-950 rounded-tr-sm rounded-br-sm'>
                        <h1 className='text-center font-semibold text-lg p-2 bg-red-claro'>Leone</h1>
                        <p className='p-4 font-medium text-justify'>
                            Leone é uma mulher extremamente poderosa que porta uma Tengo que
                            aprimora suas capacidades física muito além de uma pessoa normal. 
                            Leone demonstra capacidade excelente em combates um a um, entretanto 
                            também domina muito bem a capacidade de assissinar suas presas... 
                            Leone é forte, gentil e extrovertida, além de ser a primeira pessoa 
                            à acreditar no potêncial de Tatsumi.
                        </p>
                    </div>
                </div>
                {/* Lubbock */}
                <div className='flex w-[684px] h-[330px]'>
                    <div className='h-[330px] w-[300px]'>
                        <figure className='relative h-full w-full'>
                            <Image className='object-cover rounded-t-sm rounded-bl-sm' src={Lubbock} fill={true} />
                        </figure>
                    </div>
                    <div className='text-white w-96 bg-red-950 rounded-tr-sm rounded-br-sm'>
                        <h1 className='text-center font-semibold text-lg p-2 bg-red-claro'>Lubbock</h1>
                        <p className='p-4 font-medium text-justify'>
                            Lobbock é um dos membros que fundou a Night Raider. Ele vem de uma 
                            família rica, e se apaixou por Najenda, que foi sua professora quando 
                            pequeno. Após entrar no grupo da Night Raider, demonstrou grande potêncial 
                            e utilidade para o grupo. 
                        </p>
                    </div>
                </div>
                {/* Shelly */}
                <div className='flex w-[684px] h-[330px]'>
                    <div className='h-[330px] w-[300px]'>
                        <figure className='relative h-full w-full'>
                            <Image className='object-cover rounded-t-sm rounded-bl-sm' src={Shelly} fill={true} />
                        </figure>
                    </div>
                    <div className='text-white w-96 bg-red-950 rounded-tr-sm rounded-br-sm'>
                        <h1 className='text-center font-semibold text-lg p-2 bg-red-claro'>Shelly</h1>
                        <p className='p-4 font-medium text-justify'>
                            Calma, porém, fria... Shelly demonstra ser extrovertida e muito gentil, 
                            entretanto foi considera como um "parafuso" solto por muito, pois não se 
                            abala ao assassinar pessoa. Após descobrir que possuia grande aptidão para 
                            assassinato, Shelly se Junta a Night Raider.
                        </p>
                    </div>
                </div>
                {/* Mine */}
                <div className='flex w-[684px] h-[330px]'>
                    <div className='h-[330px] w-[300px]'>
                        <figure className='relative h-full w-full'>
                            <Image className='object-cover rounded-t-sm rounded-bl-sm' src={Mine} fill={true} />
                        </figure>
                    </div>
                    <div className='text-white w-96 bg-red-950 rounded-tr-sm rounded-br-sm'>
                        <h1 className='text-center font-semibold text-lg p-2 bg-red-claro'>Mine</h1>
                        <p className='p-4 font-medium text-justify'>
                            Mine é uma orfão estrangeira que sofreu muito preconceito com sua chegada 
                            na Capital. Sendo trata como uma pária a todo instante, Mine decidiu mudar 
                            o reino. Mine domina a arte de assassinato a distância, sendo fundamental para 
                            execuções rápidas e silênciosas...
                        </p>
                    </div>
                </div>
                {/* Najenda */}
                <div className='flex w-[684px] h-[330px]'>
                    <div className='h-[330px] w-[300px]'>
                        <figure className='relative h-full w-full'>
                            <Image className='object-cover rounded-t-sm rounded-bl-sm' src={Najenda} fill={true} />
                        </figure>
                    </div>
                    <div className='text-white w-96 bg-red-950 rounded-tr-sm rounded-br-sm'>
                        <h1 className='text-center font-semibold text-lg p-2 bg-red-claro'>Najenda</h1>
                        <p className='p-4 font-medium text-justify'>
                            Najenda é a líder da Night Raider. Najenda era considera uma das mais talentosas 
                            em todo o reino, junto com sua companheira, Esdeath. Entretanto, após ver a crueldade 
                            do reino, decidiu criar um grupo de assassinos, Night Raider, com o intuito de mudar o reino 
                            trazendo paz e justiça.
                        </p>
                    </div>
                </div>
            </div>
            <button onClick={NextImg} className='flex justify-center items-center text-white rounded-full bg-red-950 w-14 h-14'>
                <Image src={Arrow_right} height={30} width={30} quality={10} />
            </button>
        </div>
    )
} 
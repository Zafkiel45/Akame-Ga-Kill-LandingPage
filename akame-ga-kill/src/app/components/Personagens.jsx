'use client'
import Akame from '../../../public/images/Akam.webp'
import Bulat from '../../../public/images/bulat.webp'
import Chelsea from '../../../public/images/Chelsea.webp'
import Esdeath from '../../../public/images/Esdeath.webp'
import Leone from '../../../public/images/Leone.webp'
import Lubbock from '../../../public/images/lubbock.webp'
import Mine from '../../../public/images/Mine.webp'
import Najenda from '../../../public/images/Najenda.webp'
import Shelly from '../../../public/images/shelly.webp'
import Susanno from '../../../public/images/Susanno.webp'
import Tatsumi from '../../../public/images/tatsumi.webp'
import Image from 'next/image'
import { useRef } from 'react'
import { useState, useEffect } from 'react'


export const Personagens = () => {

    const CarrosselRef = useRef(null);
    const CarrosselRefChildren = useRef(null);
    const [controle, setControle] = useState(0)

    useEffect(() => {
        const elementos = CarrosselRef.current.childElementCount;
        if(controle >= elementos) {
            CarrosselRef.current.scrollLeft = 0
            setControle(0)
        } else if(controle < 0) {
            CarrosselRef.current.scrollLeft = 0
            setControle(0)
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
        <div className='flex justify-between items-center bg-black p-8 py-10'>
            <button onClick={PrevImg} className='text-white bg-red-600 w-14 h-6'>
                Back
            </button>
            <div ref={CarrosselRef} className='flex relative overflow-hidden w-[684px] h-[330px] '>
                {/* Tatsumi */}
                <div className='flex transition-transform w-[684px] h-[330px]'>
                    <div className='h-[330px] w-[300px]'>
                        <figure className='relative h-full w-full'>
                            <Image className='object-cover rounded-t-sm rounded-bl-sm' src={Tatsumi} fill={true} />
                        </figure>
                    </div>
                    <div className='text-white w-96 bg-red-950 rounded-tr-sm rounded-br-sm'>
                        <h1 className='text-center font-semibold text-lg p-2 bg-red-claro'>Tatsumi</h1>
                        <p className='p-4 font-medium text-justify'>
                            Tatsumi é um garoto gentil e corajoso que saiu rumo a capital em 
                            busca de melhorar as condições do seu vilarejo junto com seus dois 
                            grandes amigos. Após passar por diversas adversidades na capital que
                            mudou completamente a vida de Tatsumi, ele se junta a Night Raider como 
                            um recruta a ser treinado. 
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
                        <h1 className='text-center font-semibold text-lg p-2 bg-red-claro'>Tatsumi</h1>
                        <p className='p-4 font-medium text-justify'>
                            Tatsumi é um garoto gentil e corajoso que saiu rumo a capital em 
                            busca de melhorar as condições do seu vilarejo junto com seus dois 
                            grandes amigos. Após passar por diversas adversidades na capital que
                            mudou completamente a vida de Tatsumi, ele se junta a Night Raider como 
                            um recruta a ser treinado. 
                        </p>
                    </div>
                </div>
                <div className='flex w-[684px] h-[330px]'>
                    <div className='h-[330px] w-[300px]'>
                        <figure className='relative h-full w-full'>
                            <Image className='object-cover rounded-t-sm rounded-bl-sm' src={Bulat} fill={true} />
                        </figure>
                    </div>
                    <div className='text-white w-96 bg-red-950 rounded-tr-sm rounded-br-sm'>
                        <h1 className='text-center font-semibold text-lg p-2 bg-red-claro'>Tatsumi</h1>
                        <p className='p-4 font-medium text-justify'>
                            Tatsumi é um garoto gentil e corajoso que saiu rumo a capital em 
                            busca de melhorar as condições do seu vilarejo junto com seus dois 
                            grandes amigos. Após passar por diversas adversidades na capital que
                            mudou completamente a vida de Tatsumi, ele se junta a Night Raider como 
                            um recruta a ser treinado. 
                        </p>
                    </div>
                </div>
            </div>
            <button onClick={NextImg} className='text-white bg-red-600 w-14 h-6'>
                Next
            </button>
        </div>
    )
} 
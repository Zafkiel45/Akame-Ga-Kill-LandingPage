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
import { Objecto } from '../util/personagensObject'
const array = [
    Akame, 
    Bulat,
    Chelsea,
    Esdeath,
    Leone,
    Lubbock,
    Mine, 
    Najenda, 
    Shelly,
    Susanno,
    Tatsumi
]

export const Personagens = () => {
    return (
        <div className='flex gap-3 justify-center p-4 flex-wrap'>
            {Objecto.map((personagens,index) => {
                return (
                    <>
                        <figure className='relative object-contain h-[280px] w-[250px]'>
                            <Image alt='' className='rounded-sm' key={personagens.id} src={array[index]} fill={true} />
                        </figure>
                    </>
                )
            })}
        </div>
    )
} 
import Image from "next/image"
import Logod from '../../../public/images/logo.webp'


export const Footer = () => {
    return (
        <div className="flex justify-around items-center text-white font-medium w-screen bg-red-900 p-4">
            <div>&copy;Murilo Silva</div>
            <div>
                <ol className="flex gap-2">
                    <li>Github</li>
                    <li>Linkedin</li>
                    <li>Instagram</li>
                </ol>
            </div>
            <div>
                <Image src={Logod}  height={20} width={20} alt="" />
            </div>
        </div>
    )
}
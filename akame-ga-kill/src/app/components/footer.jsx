import Image from "next/image"
import Logo from '../../../public/images/logo.webp'


export const Footer = () => {
    return (
        <div className="flex justify-around  text-white font-medium w-screen bg-red-900 p-4">
            <div>&copy;Murilo Silva</div>
            <div>
                <ol className="flex gap-2">
                    <li>Github</li>
                    <li>Linkedin</li>
                    <li>Instagram</li>
                </ol>
            </div>
            <div>
                <Image src={Logo}  height={20} width={20} alt="" />
            </div>
        </div>
    )
}
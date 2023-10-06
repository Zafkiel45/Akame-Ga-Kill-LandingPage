export const MainInfos = () => {
    return (
        <div className="p-10 h-750 gap-9 py-44 items-start flex flex-col justify-start bg-no-repeat w-screen object-cover bg-[url('../../public/images/banner.webp')]">
            <div className="w-3/5"> 
                <p className="text-white font-bold w-full text-4xl">
                    Acompanhe a jornada de Tatsumi
                    e a Night Rider em busca de tornar
                    o império um Lugar melhor agora Mesmo!
                </p>
            </div>
            <button className="w-60 rounded-md text-white font-medium transition-colors hover:bg-black bg-red-600 p-3">
                Assista Agora
            </button>
        </div>
    )
}
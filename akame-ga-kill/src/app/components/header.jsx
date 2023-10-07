export const Header = () => {
    return (
        <header className="absolute bg-transparent z-10 text-white font-medium w-screen p-4">
            <ol className="flex gap-2 w-full justify-center items-center">
                <li key={Math.random()}>Item</li>
                <li key={Math.random()}>Item</li>
                <li key={Math.random()}>Item</li>
            </ol>
        </header>
    )
}
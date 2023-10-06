export const Header = () => {
    return (
        <header className="bg-red-700 text-white font-medium w-screen p-4 shadow-md">
            <ol className="flex gap-2 w-full justify-center items-center">
                <li key={Math.random()}>Item</li>
                <li key={Math.random()}>Item</li>
                <li key={Math.random()}>Item</li>
            </ol>
        </header>
    )
}
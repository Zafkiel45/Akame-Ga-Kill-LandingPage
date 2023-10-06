export const Header = () => {
    return (
        <header className="bg-red-700">
            <ol>
                <li key={Math.random()}>Item</li>
                <li key={Math.random()}>Item</li>
                <li key={Math.random()}>Item</li>
            </ol>
        </header>
    )
}
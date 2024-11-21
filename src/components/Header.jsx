import globeImg from '/src/assets/globe.png'
export default function Header() {
    return (
        <header className="journal-header">
        <img src={globeImg} alt="Globe logo" className="globe-logo"/>
        <h1>my places journal.</h1>
        </header>
);
}
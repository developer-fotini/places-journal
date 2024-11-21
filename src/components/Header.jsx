import globeImg from '/src/assets/globe.png'
export default function Header() {
    return (
        <header className="journal-header">
        <img src={globeImg} alt="Globe logo" className="globe-logo"/>
        <h1>favourite locations journal.</h1>
        </header>
);
}
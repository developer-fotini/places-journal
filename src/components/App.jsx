import Header from './Header.jsx'
import Card from './Card.jsx'
import data from '/src/data.js'

export default function App() {
    const cards = data.map(item => {
        return ( 
        <Card 
            item={item} 
            />
        )
    })
    return (
    <>
    <Header />
    <main className="main-container">
    {cards}
    </main>
    </>
)
}
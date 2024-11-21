export default function Card(props) {
return (
    <div className="card-container">
        <div className="location-img-container">
            <img className="location-img" src={props.item.imageUrl} />
        </div>
        <div className="info-container">
            <img src="./src/assets/location-icon.png" />
            <span>{props.item.location}</span>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            <h2>{props.item.title}</h2>
            <h3>{props.item.date}</h3>
            <p>{props.item.description}</p>
        </div>
</div>
)
}
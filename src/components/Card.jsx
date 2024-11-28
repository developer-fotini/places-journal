export default function Card(props) {
return (
    <div className="card-container">
        <div className="location-img-container">
            <img className="location-img" src={props.item.imageUrl} />
        </div>
        <div className="info-container">
            <img src="/assets/location-icon.png" className="location-icon" />
            <span className="country">{props.item.location}</span>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            <h2>{props.item.title}</h2>
            <p>{props.item.description}</p>
        </div>
</div>
)
}
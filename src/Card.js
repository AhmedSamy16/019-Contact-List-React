

const Card = ({ image, name, email, age }) => {
    return (
        <div className="contact-card">
            <img src={image} alt={name} />
            <div className="user-details">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Age: {age}</p>
            </div>
        </div>
    )
}

export default Card
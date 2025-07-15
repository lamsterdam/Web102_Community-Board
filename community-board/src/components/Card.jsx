import React from "react"

const Card = (props) => {

    const handleClick = (url) => {
        window.location.href = url;
    }

    return (
        <td className="card-content">
            <img src={props.image} />
            <h2>{props.name}</h2>
            <h3>{props.type}</h3>
            <button onClick={() => handleClick(props.url)}>View Details</button>
        </td>
    )
}
export default Card
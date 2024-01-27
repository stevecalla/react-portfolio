import catImage from "../assets/catimage.jpeg";

/* eslint-disable react/prop-types */
function Project({title, description}) {
    // Body
    return <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src="../assets/catimage.jpeg" alt="Very pretty brown black cat laying down looking directly ahead" />
        <img src={catImage} alt="" />
    </div>
}

export default Project;
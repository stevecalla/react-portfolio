import catImageImport from "../assets/catimage.jpeg";

/* eslint-disable react/prop-types */
function Project({title, description}) {
    // Body
    return <div>
        <h2>{title}</h2>
        <p>{description}</p>

        {/* SECTION DIDN'T WORK IN DEV OR GITHUB DEPLOY */}
        <img src="../assets/catimage.jpeg" alt="Very pretty brown black cat laying down looking directly ahead" />

        {/* SECTION WILL WORK IN DEV BUT NOT GITHUB DEPLOY */}
        <img src={catImageImport} alt="" />

        {/*SECTION WILL WORK IN DEV BUT NOT GITHUB DEPLOY */}
        <img src="./public/assets/catImagePublicFolder.jpeg" alt="Very pretty brown black cat laying down looking directly ahead" />

        {/* FIX //SECTION WILL WORK IN DEV AND GITHUB DEPLOY */}
        <img src="./assets/catImagePublicFolder.jpeg" alt="Very pretty brown black cat laying down looking directly ahead" />

 
    </div>
}

export default Project;
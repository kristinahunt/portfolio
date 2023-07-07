import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function Project() {

    const {slug} = useParams();

    const restPath = `https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/posts?slug=${slug}&_embed&acf_format=standard`;

    const [restData, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
            }
        }
        fetchData()
    }, [restPath])

    return(
        <section id="single-project">
            {restData.map(project =>
                <div key={project.id} className='single-container'>
                    <h1>{project.acf.title}</h1>

                    {project.acf.images.map(image =>
                            <img key={image.id} src={image.sizes.medium_large} alt={image.alt} />
                        )}

                    <div className="tools-objective">
                        <h2>Design Tools:</h2>
                        <p>{project.acf.design_tools}</p>

                        <h2>Development Tools:</h2>
                        <p>{project.acf.development_tools}</p>

                        <h2>Objective</h2>
                        <p>{project.acf.summary}</p>
                    </div>

                    <h2>Design Process</h2>
                    <p>{project.acf.design_process}</p>

                    <h2>Development Process</h2>
                    <p>{project.acf.development_process}</p>
                </div>
                    )}
        </section>
    )
}

export default Project;
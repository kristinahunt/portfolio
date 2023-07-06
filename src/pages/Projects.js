import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Projects({featuredImage}) {

    const restPath = 'https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/posts?categories=3&_embed';

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


    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                {restData.map(project =>
                <div key={project.id} className="project">
                    
                    {project.featured_media !== 0 && project._embedded['wp:featuredmedia'][0] && 
                    <div className="featured-image" dangerouslySetInnerHTML={featuredImage(project._embedded['wp:featuredmedia'][0])}></div>}

                    <Link to={`/projects/${project.slug}`}><h3>{project.title.rendered}</h3></Link>
                </div>
                    )}
            </div>
        </section>
    );
}

export default Projects;
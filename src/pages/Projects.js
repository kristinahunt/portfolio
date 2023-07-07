import { useState, useEffect } from "react";
import Accordion from '../components/Accordion'

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
            <div className="projects-container" >
                {restData.map(project => {
                    return <Accordion key={project.id}
                                      coverImage = {project._embedded['wp:featuredmedia'][0]}
                                      featuredMedia = {project.featured_media}
                                      title = {project.title.rendered}
                                      slug = {project.slug}
                                      summary = {project.acf.summary}
                                      designTools = {project.acf.design_tools}
                                      devTools = {project.acf.development_tools}/>
                        }
                    )}
            </div>
        </section>
    );
}

export default Projects;
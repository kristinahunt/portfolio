import { useState, useEffect } from "react";
import Accordion from '../components/Accordion'
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";

function Projects() {

    const restPath = 'https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/posts?categories=3&_embed';

    const [restData, setData] = useState([])
    const [isLoaded, setisLoaded] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setisLoaded(true)
            } else {
                setisLoaded(false)
            }
        }
        fetchData()
    }, [restPath])

    return (
        <>
        {isLoaded ? 
            <>
                <section id="projects">
                    <h1>Projects</h1>
                    <div className="projects-container" >
                        {restData.map(project => {
                            <Helmet>
                                {/* Hard coded because there is no Projects page in WP */}
                                <title>Kristina Hunt | Projects</title>
                                <meta name="description" content="Projects completed during the Front-end Web Developer program at BCIT in Vancouver, BC."/>
                                <meta name="keywords" content="Web developer, front-end web developer, web designer, Vancouver web developer, UI/UX designer"/>
                            </Helmet>

                            return <Accordion key={project.id}
                                            coverImage = {project._embedded['wp:featuredmedia'][0]}
                                            featuredMedia = {project.featured_media}
                                            title = {project.title.rendered}
                                            slug = {project.slug}
                                            summary = {project.acf.intro}
                                            designTools = {project.acf.design_tools}
                                            devTools = {project.acf.development_tools}/>
                                }
                            )}
                    </div>
                </section>
            </>
        : <Loading/>
        }
        </>
    );
}

export default Projects;
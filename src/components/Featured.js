import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function Featured({featuredImage}) {

    const restPath = 'https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/posts?categories=3&_tags=featured&_embed';

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
        <section id='featured'>
            <h2>Featured Projects</h2>
            <div className="projects-container">
                {restData.map(project =>
                <div key={project.id} className="project">
                    
                    {project.featured_media !== 0 && project._embedded['wp:featuredmedia'][0] && 
                    <div className="featured-image" dangerouslySetInnerHTML={featuredImage(project._embedded['wp:featuredmedia'][0])}></div>}

                    <Link to={`/projects/${project.slug}`}><h3>{project.title.rendered}</h3></Link>
                </div>
                    )}
            </div>
            <div className="button-arrow">
                <Link to='/projects'>View Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                </Link>
            </div>
        </section>
    );
}

export default Featured;
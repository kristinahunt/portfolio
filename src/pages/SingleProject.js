import { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

function SingleProject() {

    const {slug} = useParams();

    const restPath = `https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/posts?slug=${slug}&_embed&acf_format=standard`;

    const [restData, setData] = useState([])

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

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
                        <div className="tools">
                            {project.acf.design_tools !== '' ?
                            <div className="design-tools">
                                <h2>Design Tools:</h2>
                                <p>{project.acf.design_tools}</p> 
                            </div>
                            : undefined}

                            {project.acf.development_tools !== '' ?
                            <div className="dev-tools">
                                <h2>Development Tools:</h2>
                                <p>{project.acf.development_tools}</p> 
                            </div>
                            : undefined}
                        </div>

                        <div className="objective">
                            <h2>Objective</h2>
                            <p>{project.acf.summary}</p>
                        </div>
                    </div>

                    <div className="heading-tabs">
                        <h2 className={toggleState === 1 ? "tabs active-tabs" : "tabs"} 
                            onClick={() => toggleTab(1)}>
                            Design Process</h2>
                        <h2 className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}>
                            Development Process</h2>
                    </div>
                    
                    <div className="content-tabs">
                        <p className={toggleState === 1 ? "content active-content" : "content"}>
                            {project.acf.design_process}
                        </p>
                        <p className={toggleState === 2 ? "content active-content" : "content"}>
                            {project.acf.development_process}
                        </p>
                    </div>

                    <span className="button-arrow">
                        <Link to='/projects'>More Projects
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                        </Link>
                    </span>
      
                </div>
                    )}
        </section>
    )
}

export default SingleProject;
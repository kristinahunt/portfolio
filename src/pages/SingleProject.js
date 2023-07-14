import { useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";

function SingleProject() {

    const {slug} = useParams();

    const restPath = `https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/posts?slug=${slug}&_embed&acf_format=standard`;

    const [restData, setData] = useState([])

    const [isLoaded, setisLoaded] = useState(false)

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
                setisLoaded(true)
            } else {
                setisLoaded(false)
            }
        }
        fetchData()
    }, [restPath])

    console.log(restPath)

    return(
        <>
        {isLoaded ? 
            <>
        <article id="single-project">
            {restData.map(project =>
                <div key={project.id} className='single-container'>

                    <Helmet>
                        <title>{project.yoast_head_json.title}</title>
                        <meta name="description" content={project.yoast_head_json.description}/>
                        <meta name="keywords" content="Web developer, front-end web developer, web designer, Vancouver web developer, UI/UX designer"/>
                    </Helmet>

                    <h1>{project.title.rendered}</h1>
                    <Carousel gallerySize={project.acf.images.length} />
                    <div className="content-container"> 
                        <div className="column-left">
                            {project.acf.design_tools !== '' ?
                            <section className="design-tools">
                                <h2>Design Tools:</h2>
                                <p>{project.acf.design_tools}</p> 
                            </section>
                            : undefined}

                            {project.acf.development_tools !== '' ?
                            <section className="dev-tools">
                                <h2>Development Tools:</h2>
                                <p>{project.acf.development_tools}</p> 
                            </section>
                            : undefined}
                            
                            {project.acf.live_site !== '' ?
                            <div className="button-arrow-small">
                                <a href={project.acf.live_site}>
                                Live Site
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg></a>
                            </div>
                            : undefined}

                            {project.acf.github !== '' ?
                            <div className="button-arrow-small">
                                <a href={project.acf.github}>
                                GitHub
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg></a>
                            </div>
                            : undefined}

                            {project.acf.mockup !== '' ?
                            <div className="button-arrow-small">
                                <a href={project.acf.mockup}>
                                Mockup
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg></a>
                            </div>
                            : undefined}
                        </div>
                        <div className="column-right">
                            <section className="objective">
                                <h2>Project Summary</h2>
                                <p>{project.acf.summary}</p>
                            </section>
                                    
                            <div className="heading-tabs">
                                <h2 className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                                Design Process</h2>
                                <h2 className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                                Development Process</h2>
                            </div>

                            <section className="content-tabs">
                                    {project.acf?.design_repeater.map(design =>
                                        <div key={design.subheading} className={toggleState === 1 ? "content active-content" : "content"}>
                                            <h3>{design.subheading}</h3>
                                            <p>{design.content}</p>
                                        </div>
                                    )}

                                    {project.acf?.development_repeater.map(development =>
                                            <div key={development.subheading} className={toggleState === 2 ? "content active-content" : "content"}>
                                                <h3>{development.subheading}</h3>
                                                <p>{development.content}</p>
                                            </div>
                                        )}
                            </section>
                            <div className="button-arrow">
                                <Link to='/projects'>More Projects
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                    )}
        </article>
        </>
        : <Loading/>
        }
        </>
    );
}

export default SingleProject;
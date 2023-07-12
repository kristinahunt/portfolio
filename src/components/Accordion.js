import { useState} from "react";
import { Link } from "react-router-dom";
import featuredImage from "../globals/FeaturedImage";

const Accordion = ({coverImage, featuredMedia, title, slug, summary, designTools, devTools}) => {
    
    const [isActive, setIsActive] = useState(false);

    return(
        <div onClick={() => setIsActive(!isActive)} className='project'>

            {featuredMedia !== 0 && coverImage && <div className="featured-image" dangerouslySetInnerHTML={featuredImage(coverImage)}></div>}
            
            <div className="title-btn">
                <h2>{title}</h2>

                <button>
                    {isActive ? '-' : '+'}
                </button>
            </div>

            {/* {isActive && <div className='accordion-content'> */}
            <div className={isActive ? 'accordion-content open' : 'accordion-content'}>
                           <p className='summary'>{summary}</p>
                           {designTools !== '' ? <p>Design Tools: {designTools}</p> : undefined}
                           {devTools !== '' ? <p>Development Tools: {devTools}</p> : undefined}
                           <div className="button-arrow-small">
                                <Link to={`/projects/${slug}`}>View Project
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                                </Link>
                           </div>
                        </div>
                         {/* </div>} */}
        </div>

    );
}

export default Accordion;
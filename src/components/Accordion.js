import { useState} from "react";
import { Link } from "react-router-dom";

const Accordion = ({coverImage, featuredMedia, title, slug, summary, designTools, devTools}) => {
    
    const [isActive, setIsActive] = useState(false);

    const featuredImage = ( featuredImageObject ) => {
        // let imgWidth = featuredImageObject.media_details.sizes.full.width;
        // let imgHeight = featuredImageObject.media_details.sizes.full.height;
        
        let imgHeight = '200px';
        let imgWidth = 'auto';
        let imgURL = featuredImageObject.source_url;
        let img = `<img src="${imgURL}" 
            width="${imgWidth}"
            height="${imgHeight}"
            alt="${featuredImageObject.alt_text}"
            srcset="${imgURL} ${imgWidth}w,
            ${featuredImageObject.media_details.sizes.large ? featuredImageObject.media_details.sizes.large.source_url + ' 1024w,' : ''}
            ${featuredImageObject.media_details.sizes.medium_large ? featuredImageObject.media_details.sizes.medium_large.source_url + ' 768w,' : ''}
            ${featuredImageObject.media_details.sizes.medium ? featuredImageObject.media_details.sizes.medium.source_url + ' 300w' : ''}"
            sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
        return {__html: img}
      }

    return(
        <div className='project' onClick={() => setIsActive(!isActive)}>

            {featuredMedia !== 0 && coverImage && <div className="featured-image" dangerouslySetInnerHTML={featuredImage(coverImage)}></div>}
            
            <Link to={`/projects/${slug}`}><h3>{title}</h3></Link>

            <button>
                {isActive ? '-' : '+'}
            </button>

            {isActive && <div className="accordion-content">
                           <p>{summary}</p>
                           <p>Design Toolkit: {designTools}</p>
                           <p>Development Toolkit: {devTools}</p>
                         </div>}
        </div>

    );
}

export default Accordion;
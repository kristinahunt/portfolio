import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import featuredImage from "../globals/FeaturedImage";

function Carousel ({gallerySize}) {

    //Followed this tutorial: https://www.makeuseof.com/react-js-interactive-carousel-build/

    const {slug} = useParams();

    const restPath = `https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/posts?slug=${slug}&_embed&acf_format=standard`;

    const [restData, setData] = useState([]);

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

    const [index, setIndex] = useState(0); 
    const length = gallerySize;
  
    const handlePrevious = () => {
      const newIndex = index - 1;
      setIndex(newIndex < 0 ? length - 1 : newIndex);
    };
  
    const handleNext = () => {
      const newIndex = index + 1;
      setIndex(newIndex >= length ? 0 : newIndex);
    };

    return(
        <div className="image-carousel">
                <button className="button-prev" onClick={handlePrevious}>
                    <svg role="button" aria-label="Previous Image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                </button>
                <button className="button-next" onClick={handleNext}>
                    <svg role="button"  aria-label="Next Image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>    
                </button>  
                {restData.map(project =>
                // <img key={project.id} src={project.acf.images[index].sizes.medium_large} alt="" />
                // <img key={project.id} src={project.acf.images[index].sizes.large} alt="" />
                <img key={project.id} src={project.acf.images[index].sizes['large']} alt={project.acf.images[index].alt} />
                )}
        </div>
    );
}

export default Carousel;
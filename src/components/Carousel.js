import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Carousel ({gallery}) {

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
    const length = gallery;
  
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

            {restData.map(project =>
            <div key={project.id} className="buttons">
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>  
                <img src={project.acf.images[index].sizes.medium_large} alt="" />
                {/* {console.log(project.acf.images.length)} */}
            </div> 
            )}

        </div>
    );
}

export default Carousel;
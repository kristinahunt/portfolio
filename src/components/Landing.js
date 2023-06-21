import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Landing({restBase}) {
    // const restBase = 'https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/';
    // const restPath = restBase + '/posts/19'
    const restPath = 'https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/posts/19';
    //console.log(restPath)

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
        <section id='landing'>
            <h1>{restData.title?.rendered}</h1>
            <div className="content" dangerouslySetInnerHTML={{__html:restData.excerpt?.rendered}}></div>
            <Link to='/projects'>See My Work</Link>
        </section>
    );
}

export default Landing;
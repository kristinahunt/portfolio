import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Loading from "../components/Loading"

function Landing() {

    const restPath = 'https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/pages/32'
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
        <section id='landing'>
            <h1>{restData.acf?.name}</h1>
            <p className='content'>{restData.acf?.intro}</p>
            <span className="button-arrow">
                <Link to='/projects' aria-label="See all of Kristina's projects">See My Work
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                </Link>
            </span>
           
        </section>
        </>
        : <Loading/>
        }
        </>
    );
}

export default Landing;
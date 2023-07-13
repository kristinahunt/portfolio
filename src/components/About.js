import { useState, useEffect } from "react";
import Socials from './Socials';

function About({restBase}) {

    const restPath = 'https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/pages/34?_acf_format=standard';

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

    console.log(restPath)

    console.log(restData.acf?.intro)

    return (
        <section id='about'>
            <h2>{restData.acf?.title}</h2>
            <div className="about-design">
                <h3>Design Stack:</h3>
                <p>{restData.acf?.design_skills}</p>
            </div>
            <div className="about-development">
                <h3>Development Stack:</h3>
                <p>{restData.acf?.development_skills}</p>
            </div>
            <p>{restData.acf?.about}</p>
            {/* <img src={restData.acf?.picture} alt="" /> */}
            <Socials />
        </section>
    );
}

export default About;
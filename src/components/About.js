import { useState, useEffect } from "react";
import Socials from './Socials';

function About() {

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

    return (
        <section id="about">
            <h2>{restData.acf?.title}</h2>
            <div className="content-container">
                <div className="column-left">
                    <div className="about-design">
                        <h3>Design Stack:</h3>
                        <p>{restData.acf?.design_skills}</p>
                    </div>
                    <div className="about-development">
                        <h3>Development Stack:</h3>
                        <p>{restData.acf?.development_skills}</p>
                    </div>
                </div>
                <div className="column-right">
                    <h3>Hey there!</h3>
                    {restData.acf?.about_repeater.map(about =>
                         <p key={about.content}>{about.content}</p>
                        )}
                    <Socials />
                </div>
            </div>
        </section>
    );
}

export default About;
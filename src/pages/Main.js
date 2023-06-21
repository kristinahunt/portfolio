import Landing from '../components/Landing';
import Featured from '../components/Featured';
import About from '../components/About';

function Main() {

    const restBase = 'https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/';

    return (
        <div className='main-content'>
            <Landing restbase={restBase} />
            <Featured />
            <About />
        </div>
    );
}

export default Main;
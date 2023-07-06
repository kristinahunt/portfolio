import Landing from '../components/Landing';
import Featured from '../components/Featured';
import About from '../components/About';

function Main() {

    return (
        <div className='main-content'>
            <Landing />
            <Featured />
            <About />
        </div>
    );
}

export default Main;
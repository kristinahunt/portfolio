import Landing from '../components/Landing';
import Featured from '../components/Featured';
import About from '../components/About';
// import Colors from '../components/Colors';

function Main() {

    return (
        <div className='main-content'>
            <Landing />
            <Featured />
            <About />
            {/* <Colors /> */}
        </div>
    );
}

export default Main;
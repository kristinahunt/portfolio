import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Project from './components/Project';
import About from './components/About';
import Footer from './components/Footer';

function App() {

const restBase = 'https://kristinahunt.ca/portfolio-backend/wp-json/wp/v2/';

  return (
    <BrowserRouter basename="/">
      <div className='site-wrapper'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Main restBase={restBase} />} />
            <Route path='/projects' element={<Projects restBase={restBase} />} />
            <Route path='/projects/:slug' element={<Project restBase={restBase} />} />
            <Route path='/#about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

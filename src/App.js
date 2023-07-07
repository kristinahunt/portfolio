import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Project from './pages/SingleProject';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter basename="/">
      <div className='site-wrapper'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:slug' element={<Project />} />
            <Route path='/#about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

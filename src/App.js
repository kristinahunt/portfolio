import './App.scss';
import {BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Project from './pages/SingleProject';
import About from './components/About';
import Error404 from './pages/404';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <BrowserRouter basename="/">
      <ScrollToTop>
      <div className='site-wrapper'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:slug' element={<Project />} />
            {/* <Route path='#about' preventScrollReset={true} element={<About />} /> */}
            <Route path='*' element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Projects from './pages/Projects';
import Project from './pages/SingleProject';
import Error404 from './pages/404';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';

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
            <Route path='*' element={<Error404 />} />
            <Route path='/loading' element={<Loading />}/>
          </Routes>
        </main>
        <Footer />
      </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;

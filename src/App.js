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

const featuredImage = ( featuredImageObject ) => {
  // let imgWidth = featuredImageObject.media_details.sizes.full.width;
  // let imgHeight = featuredImageObject.media_details.sizes.full.height;
  
  let imgHeight = '200px';
  let imgWidth = 'auto';
  let imgURL = featuredImageObject.source_url;
  let img = `<img src="${imgURL}" 
      width="${imgWidth}"
      height="${imgHeight}"
      alt="${featuredImageObject.alt_text}"
      srcset="${imgURL} ${imgWidth}w,
      ${featuredImageObject.media_details.sizes.large ? featuredImageObject.media_details.sizes.large.source_url + ' 1024w,' : ''}
      ${featuredImageObject.media_details.sizes.medium_large ? featuredImageObject.media_details.sizes.medium_large.source_url + ' 768w,' : ''}
      ${featuredImageObject.media_details.sizes.medium ? featuredImageObject.media_details.sizes.medium.source_url + ' 300w' : ''}"
      sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
  return {__html: img}
}

  return (
    <BrowserRouter basename="/">
      <div className='site-wrapper'>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Main restBase={restBase} />} />
            <Route path='/projects' element={<Projects restBase={restBase} featuredImage={featuredImage} />} />
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

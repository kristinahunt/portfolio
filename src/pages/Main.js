import Landing from '../components/Landing';
import Featured from '../components/Featured';
import About from '../components/About';

function Main() {

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
        <div className='main-content'>
            <Landing restbase={restBase} />
            <Featured featuredImage={featuredImage} />
            <About />
        </div>
    );
}

export default Main;
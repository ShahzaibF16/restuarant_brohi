import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {  Link, Route, useLocation, Routes } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Pic from '../Assets/gallery_1.png'
import Pic2 from '../Assets/gallery_2.jpg'
import Pic3 from '../Assets/gallery_8.jpg'
import Pic4 from '../Assets/galley_4.jpg'
import Pic5 from '../Assets/galley_5.jpg'

// import './Gallery.css';

const images = [
  {
    original: Pic,
    thumbnail: Pic
  },
  {
    original: Pic2,
    thumbnail: Pic2
  },
  {
    origin: Pic3,
    thumbnail: Pic3
  },
  {
    origin: Pic4,
    thumbnail: Pic4
  },
  {
    origin: Pic5,
    thumbnail: Pic5
  }
  // Add more images as needed
];

const GalleryPage = () => {
  const location = useLocation();

  return (
    <motion.div
      className="gallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <h2 className="text-center font-weight-bold mb-5">Gallery</h2>
        <ImageGallery items={images} />
      </Container>
    </motion.div>
  );
};

const ThumbnailGallery = () => {
  return (
    <motion.div
      className="thumbnail-gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Container>
        <h2 className="text-center font-weight-bold mb-5">Thumbnail Gallery</h2>
        <div className="thumbnails">
          {images.map((image, index) => (
            <Link key={index} to={`/gallery/${index}`}>
              <img src={image.thumbnail} alt={`Thumbnail ${index}`} width={'300px'} height={'300px'}/>
            </Link>
          ))}
        </div>
      </Container>
    </motion.div>
  );
};

const Gallery = () => {
  return (
        <Routes>
        <Route path="/" element={<ThumbnailGallery />} ></Route>
        <Route path="/:id" element={<GalleryPage />} ></Route>
        </Routes>
  );
};

export default Gallery;

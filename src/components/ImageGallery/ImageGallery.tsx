import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageData {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  description: string;
  user: {
    name: string;
  };
  likes: number;
}

interface ImageGalleryProps {
  images: ImageData[];
  onImageClick: (imageInfo: ImageCardInfo) => void;
}

interface ImageCardInfo {
  imageSrc: string;
  imageAltDescription: string;
  imageDescription: string;
  imageAutor: string;
  imageLikes: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li className={css.galleryCard} key={image.id}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

import React from 'react';
import css from './ImageCard.module.css';

interface ImageData {
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

interface ImageCardProps {
  image: ImageData;
  onImageClick: (imageInfo: ImageCardInfo) => void;
}

interface ImageCardInfo {
  imageSrc: string;
  imageAltDescription: string;
  imageDescription: string;
  imageAutor: string;
  imageLikes: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  const imageCardInfo: ImageCardInfo = {
    imageSrc: image.urls.regular,
    imageAltDescription: image.alt_description,
    imageDescription: image.description,
    imageAutor: image.user.name,
    imageLikes: image.likes,
  };

  const handleClick = () => {
    onImageClick(imageCardInfo);
  };

  return (
    <div>
      <img
        onClick={handleClick}
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
      <div className={css.imageInfo}>
        <p>
          Author: <span>{image.user.name}</span>
        </p>
        <p>
          Likes: <span>{image.likes}</span>
        </p>
      </div>
    </div>
  );
};

export default ImageCard;

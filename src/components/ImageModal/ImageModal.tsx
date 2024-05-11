import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';

interface ImageData {
  imageSrc: string;
  alt_description: string;
}

interface ImageModalProps {
  isOpen: boolean;
  image: ImageData | null;
  onCloseModal: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, image, onCloseModal }) => {
  const imageSrc = image && image.imageSrc;

  return (
    <Modal
      overlayClassName={css.backdrop}
      className={css.modalWindow}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
    >
      {imageSrc && (
        <img
          className={css.imageModal}
          src={imageSrc}
          alt={image && image.alt_description}
        />
      )}
    </Modal>
  );
};

export default ImageModal;

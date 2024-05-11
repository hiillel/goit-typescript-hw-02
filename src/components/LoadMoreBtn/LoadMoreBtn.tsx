import React from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  const handleClick = () => {
    onLoadMore();
  };

  return (
    <button className={css.loadMoreBtn} onClick={handleClick} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;

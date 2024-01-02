import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import MovieModal from './MovieModal';

function Movie({ item }) {
  const [like, setLike] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        onClick={handleImageClick}
        className='w-full h-auto block transform transition-transform duration-300 group-hover:scale-105'
      >
        <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt={item.title} />
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
          <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
            {item.title}
          </p>
          <p className='absolute top-2 left-2'>{like ? <FaHeart /> : <FaRegHeart />}</p>
        </div>
      </div>
      <MovieModal isOpen={modalOpen} onClose={closeModal} videoId={item.videoId} description={item.description} />
    </>
  );
}

export default Movie;

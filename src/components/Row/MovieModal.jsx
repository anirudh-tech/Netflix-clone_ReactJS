import React from 'react';
import ReactPlayer from 'react-player/youtube';

const MovieModal = ({ isOpen, onClose, videoId, description }) => {
  return (
    isOpen && (
        <div className='w-full h-screen z-50 fixed top-0 left-0 bg-gray-200'>
      <div className="modal-overlay w-full h-[300px]">
        <div className="modal-content">
          <button className="modal-close text-white" onClick={onClose}>
            Close
          </button>
          <div className="modal-video">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} controls={true} />
          </div>
          <p className="modal-description">{description}</p>
        </div>
      </div>
      </div>
    )
  );
}; 

export default MovieModal;

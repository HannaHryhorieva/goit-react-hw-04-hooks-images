import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ imageUrl, tags, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={imageUrl} alt={tags} width="1280" height="auto" />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  imageUrl: PropTypes.string,
  tags: PropTypes.string,
  onClose: PropTypes.func,
};

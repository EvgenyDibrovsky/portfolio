import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BsX } from 'react-icons/bs';

export default function Modal({
  closeModal,
  children,
  width = 'max-w-[28rem]',
  backgroundImage = null,
}) {
  const backdropStyle = backgroundImage
    ? { backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})` }
    : {};

  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');
    const handleKeyDown = e => {
      if (e.keyCode === 27) {
        // 27 is the keyCode for the ESC key
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('overflow-y-hidden');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]); // Добавили closeModal в массив зависимостей

  const modalContent = (
    <div
      className="fixed h-full overflow-y-auto mt-12 inset-0 flex items-center justify-center bg-bgModal z-50 backdrop-blur-sm bg-cover bg-center bg-fixed"
      onClick={closeModal}
      style={backdropStyle}
    >
      <div
        className={`relative w-11/12 ${width}  rounded-md transition-all duration-200 bg-white text-black dark:bg-black dark:text-white`}
        onClick={e => e.stopPropagation()}
      >
        {children}
        <div className="absolute cursor-pointer -right-2 -top-8 flex items-center justify-center">
          <BsX
            className=" w-8 h-8 text-white text-bold hover:scale-75 transition-all duration-200"
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
}

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BsXLg, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function Modal({ closeModal, children, width = 'max-w-[28rem]', backgroundImage = null, showChevrons = false, handleNext, handlePrev, current, total }) {
  const backdropStyle = backgroundImage ? { backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})` } : {};

  useEffect(() => {
    document.body.classList.add('overflow-y-hidden');
    const handleKeyDown = e => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('overflow-y-hidden');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const modalContent = (
    <div className="fixed h-full overflow-y-auto inset-0 flex items-center justify-center bg-bgModal z-50 backdrop-blur-sm bg-cover bg-center bg-fixed" onClick={closeModal} style={backdropStyle}>
      <div className={`relative w-11/12 ${width} rounded-md duration-200`} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between bg-transparent mb-2">
          {showChevrons && (
            <div className="flex gap-2">
              <div className={`cursor-pointer flex items-center justify-between group ${current === 1 ? 'opacity-30' : ''}`}>
                <BsChevronLeft className="w-8 h-8 p-1 text-white dark:text-white font-bold duration-200 group-hover:scale-75" onClick={handlePrev} />
              </div>
              <div className={`cursor-pointer flex items-center justify-between group ${current === total ? 'opacity-30' : ''}`}>
                <BsChevronRight className="w-8 h-8 p-1 text-white dark:text-white font-bold duration-200 group-hover:scale-75" onClick={handleNext} />
              </div>
              <div className="flex items gap-2 text-white dark:text-white h-8 py-1 px-4">
                <div>{current}</div>
                <div>/</div>
                <div>{total}</div>
              </div>
            </div>
          )}

          <div className="cursor-pointer flex items-center justify-between ml-auto group">
            <BsXLg className="w-8 h-8 p-1 text-white dark:text-white font-bold duration-200 group-hover:scale-75" onClick={closeModal} />
          </div>
        </div>
        <div className="bg-white  dark:bg-black text-black dark:text-white">{children}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
}

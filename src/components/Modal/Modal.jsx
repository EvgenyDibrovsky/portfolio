import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BsXLg, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const PortfolioModal = ({ closeModal, children, handleNext, handlePrev, current, total }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };

    document.body.classList.add('overflow-y-hidden');
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('overflow-y-hidden');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 backdrop-blur-sm bg-cover bg-center bg-fixed" onClick={closeModal}>
      <div className="w-11/12 lg:w-10/12 xxl:w-9/12 2xl:w-8/12 rounded-md duration-200 shadow-lg" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-2">
            <BsChevronLeft className={`w-8 h-8 p-1 text-white cursor-pointer ${current === 1 ? 'opacity-30' : ''}`} onClick={handlePrev} aria-label="Previous" />
            <BsChevronRight className={`w-8 h-8 p-1 text-white cursor-pointer ${current === total ? 'opacity-30' : ''}`} onClick={handleNext} aria-label="Next" />
            <div className="text-white h-8 py-1 px-4">
              {current} / {total}
            </div>
          </div>
          <BsXLg className="w-8 h-8 p-1 text-white cursor-pointer" onClick={closeModal} aria-label="Close" />
        </div>
        <div className="bg-white dark:bg-black text-black dark:text-white">{children}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal'));
};
export default PortfolioModal;

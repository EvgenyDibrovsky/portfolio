import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default function LoadingPage() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <ThreeDots height="80" width="80" radius="9" color="#e0984c" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={false} />
    </div>
  );
}

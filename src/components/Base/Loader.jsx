import React from 'react';
// import { Grid } from 'react-loader-spinner';

const Loading = () => (
  // <div className="flex items-center justify-center h-screen">
  //   <Grid
  //     height="80"
  //     width="80"
  //     color="#36a6de"
  //     ariaLabel="grid-loading"
  //     radius="12.5"
  //     wrapperStyle={{}}
  //     wrapperClass=""
  //     visible={true}
  //   />
  // </div>
  <div className="fixed top-0 left-0 w-full h-full z-50 bg-white">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-inherit text-inherit opacity-100 transition-opacity duration-200 transform">
      <div className="preloader-spinner relative text-gray-900 text-4xl font-bold leading-none tracking-wider box-border animate-animloader after:absolute  after:content-['edweb.site'] after:top-0 after:left-0 after:text-orange-400 after:overflow-hidden after:animate-animloader after:duration-200">
        edweb.site
      </div>
    </div>
  </div>
);

export default Loading;

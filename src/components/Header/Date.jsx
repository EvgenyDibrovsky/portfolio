import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="text-black dark:text-white text-lg font-semibold">{currentDate.toLocaleDateString()}</p>
        <p className="text-black dark:text-white text-md">{currentDate.toLocaleTimeString()}</p>
      </div>
    </>
  );
};

export default CurrentDateTime;

import React from 'react';

const PageTitle = ({ icon, title }) => {
  const IconComponent = icon
    ? React.cloneElement(icon, {
        className: 'text-iconColor dark:text-iconColorDark w-6 h-6',
      })
    : null;

  return (
    <div className="sm:w-full flex items-center gap-4">
      {IconComponent && <div className="animate-iconTitle">{IconComponent}</div>}
      <h1 className="text-[1.5rem] font-semibold text-black dark:text-white">{title}</h1>
    </div>
  );
};
export default PageTitle;

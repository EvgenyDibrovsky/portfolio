const ExperienceListItem = ({ data }) => {
  return (
    <li className="relative w-full flex justify-between h-full p-5 shadow-sm shadow-black dark:shadow-white rounded-md opacity-0 init-animate-1">
      <div></div>
      <div className="w-full flex flex-col  gap-2">
        {['title', 'position', 'responsibilities', 'country', 'period'].map(field => (
          <div key={field} className="sm:flex">
            <p className="text-textColor dark:text-white text-[1rem] font-semibold">{data[field]}</p>
            <span className="hidden sm:block mr-2 text-textColor dark:text-white text-[1rem] font-semibold ">:</span>
            <p className="text-textColor dark:text-white text-[1rem]">{data[`${field}-description`]}</p>
          </div>
        ))}
      </div>
    </li>
  );
};
export default ExperienceListItem;

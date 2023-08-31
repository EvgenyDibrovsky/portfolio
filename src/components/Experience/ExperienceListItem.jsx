export default function ExperienceListItem({ data }) {
  return (
    <li className="relative w-full flex justify-between h-full p-5  border border-colorBorder dark:border-colorBorderDark rounded-md">
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
}

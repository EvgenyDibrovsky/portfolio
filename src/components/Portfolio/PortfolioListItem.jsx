import { BsSearch } from 'react-icons/bs';

export default function PortfolioListItem({ image, name, onCardClick }) {
  return (
    <li className="group max-h-72 relative flex flex-col justify-between transition-all duration-500 rounded-md overflow-hidden">
      <div
        onClick={onCardClick}
        className="relative flex items-center justify-center cursor-pointer"
      >
        <img
          src={process.env.PUBLIC_URL + image}
          alt={name}
          className="w-full max-h-72 object-cover transition-transform duration-200 ease-in-out group-hover:scale-110"
        />
        <h3 className="absolute z-10 bg-gray-500 dark:bg-black px-2 py-1 top-0 left-0 text-white text-sm">
          {name}
        </h3>

        <div className="flex items-center justify-center transition-transform duration-200 ease-in-out absolute inset-0 py-10 px-5 bg-black bg-opacity-60 dark:bg-black dark:bg-opacity-60 transform translate-y-full group-hover:translate-y-0 ">
          <BsSearch className="text-[3rem] text-white" />
        </div>
      </div>
    </li>
  );
}
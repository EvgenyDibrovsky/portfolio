import { BsSearch } from 'react-icons/bs';

export default function PortfolioListItem({ image, image_webp, name, onCardClick }) {
  return (
    <li
      onClick={onCardClick}
      className="shadow-sm shadow-black dark:shadow-white group max-h-72 relative flex flex-col justify-between transition-all duration-500 rounded-md overflow-hidden init-animate-1 "
    >
      <div className="relative flex items-center justify-center cursor-pointer aspect-video ">
        <picture>
          <source srcSet={process.env.PUBLIC_URL + image_webp} type="image/webp" />
          <source srcSet={process.env.PUBLIC_URL + image} type="image/jpg" />
          <img src={process.env.PUBLIC_URL + image} alt={name} className="w-full h-auto object-cover transition-transform duration-200 ease-in-out group-hover:scale-110" width="320" height="180" />
        </picture>
        <h3 className="absolute z-10 bg-gray-500 dark:bg-black px-2 py-1 top-0 left-0 text-white text-sm">{name}</h3>
        <div className="flex items-center justify-center transition-transform duration-200 ease-in-out absolute inset-0 py-10 px-5 bg-black bg-opacity-60 dark:bg-black dark:bg-opacity-60 transform translate-y-full group-hover:translate-y-0">
          <BsSearch className="text-[3rem] text-white" />
        </div>
      </div>
    </li>
  );
}

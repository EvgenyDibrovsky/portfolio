export default function PortfolioListItem({
  image,
  link,
  name,
  description,
  technologies,
  participation,
}) {
  return (
    <li className="group h-72 relative flex flex-col justify-between shadow-md transition-all duration-500 dark:shadow-white rounded-md overflow-hidden">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative flex items-center justify-center">
          <img
            src={process.env.PUBLIC_URL + image}
            alt={name}
            className="w-full h-72 object-cover transition-transform duration-200 ease-in-out group-hover:scale-110"
          />
          <div className="transition-transform duration-200 ease-in-out absolute inset-0 p-4 bg-black bg-opacity-50 dark:bg-white dark:bg-opacity-30 transform translate-y-full group-hover:translate-y-0">
            <h3 className="text-left text-white text-lg">{name}</h3>
            <p className=" text-white">{description}</p>
            <p className=" text-white">{technologies}</p>{' '}
            <p className=" text-white">{participation}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

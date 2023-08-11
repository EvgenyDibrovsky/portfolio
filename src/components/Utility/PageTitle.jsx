export default function PageTitle({ title }) {
  return (
    <h1 className="relative text-4xl mb-8 text-black dark:text-white after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-200 dark:after:bg-orange-400">
      {title}
    </h1>
  );
}

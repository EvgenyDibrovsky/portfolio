export default function PageTitle({ icon, title }) {
  return (
    <div className="relative flex items-center gap-4 mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-200 dark:after:bg-orange-400 ">
      <div className="animate-iconTitle">{icon}</div>
      <h1 className=" text-xl  font-semibold text-black dark:text-white ">{title}</h1>
    </div>
  );
}

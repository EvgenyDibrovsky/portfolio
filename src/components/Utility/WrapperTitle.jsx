import AnimateElements from '../../components/Utility/AnimateElements';

const WrapperTitle = ({ children }) => {
  return (
    <AnimateElements>
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:justify-between gap-4 mb-16 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-200 dark:after:bg-sky-600 opacity-0 init-animate-3">
        {children}
      </div>
    </AnimateElements>
  );
};
export default WrapperTitle;

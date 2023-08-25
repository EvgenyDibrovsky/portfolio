import AnimateElements from 'components/Utility/AnimateElements';

export default function WrapperTitle({ children }) {
  return (
    <AnimateElements>
      <div className="relative flex flex-col lg:flex-row items-center justify-between  gap-4 mb-8 after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-gray-200 dark:after:bg-orange-400 opacity-0 init-animate-3">
        {children}
      </div>
    </AnimateElements>
  );
}

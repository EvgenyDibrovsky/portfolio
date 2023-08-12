export default function Section({ children }) {
  return (
    <section className=" h-full bg-bgSection dark:bg-bgSectionDark md:pl-[12.5rem] pt-24 pb-10 md:py-6">
      {children}
    </section>
  );
}

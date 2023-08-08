export default function Section({ children }) {
  return (
    <section className="bg-bgSection dark:bg-bgSectionDark md:pl-[12.5rem]  py-6">
      {children}
    </section>
  );
}

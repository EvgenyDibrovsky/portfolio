export default function Section({ children, customPadding }) {
  const defaultPadding = 'md:pl-[12.5rem] pt-24 pb-10 md:py-6';
  const paddingClass = customPadding || defaultPadding;

  return <section className={`h-full  ${paddingClass}`}>{children}</section>;
}

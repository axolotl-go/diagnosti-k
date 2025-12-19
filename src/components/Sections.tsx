const Sections: React.FC<TypeSection> = ({
  title,
  children,
  position = "start",
}) => {
  return (
    <section className="flex flex-col gap-4 mt-16">
      <h2
        className={`text-xl md:text-2xl flex font-bold mb-4 text-blue justify-${position}`}
      >
        {title}
      </h2>

      {children}
    </section>
  );
};

export default Sections;

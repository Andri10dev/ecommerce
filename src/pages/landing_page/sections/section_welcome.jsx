import CardProduct from "../../../components/card/card_product";

const SectionWelcome = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-3 md:px-5 lgpx-10 py-3">
          {Array.from({ length: 20 }).map(() => (
            <CardProduct />
          ))}
        </div>
  );
};

export default SectionWelcome;

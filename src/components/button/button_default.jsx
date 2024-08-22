const ButtonDefault = ({ type, name, handleClick, addClass }) => {
  return (
    <button
      type={type ?? "button"}
      onClick={handleClick}
      className={`bg-custom-yellow hover:bg-yellow-400 text-black transition-colors rounded-full px-5 font-semibold py-2 min-w-[120px] text-sm md:text-sm lg:text-base flex items-center justify-center  ${addClass}`}
    >
      {name}
    </button>
  );
};

export default ButtonDefault;

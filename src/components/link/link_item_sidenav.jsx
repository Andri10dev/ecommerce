import { Link } from "react-router-dom";

const LinkItemSideNav = ({ link, name,addClass }) => {
  return (
    <Link
      to={link}
      className={`w-full py-2 rounded-full bg-white text-black font-semibold text-sm md:text-base px-3 ${addClass}`}
    >
      {name}
    </Link>
  );
};
export default LinkItemSideNav;

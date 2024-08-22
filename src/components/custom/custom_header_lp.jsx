import ButtonDefault from "../button/button_default";
import { useNavigate } from "react-router-dom";
import Logo from "../../asset/LOGO.png";
import Navbar from "../navigation/navbar";
import InputSearch from "../form/input_search";

const CustomHeaderLp = () => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-30 bg-custom-blue pb-3">
      <div className="flex items-center gap-10 pt-5 pb-3 ">
        <img
          src={Logo}
          alt="logo"
          className="w-[80px] aspect-square object-contain"
        />
        <InputSearch />
        <div className="flex items-center justify-end gap-3 text-white">
          <ButtonDefault name="Keranjang" />
          <ButtonDefault handleClick={() => navigate("/login")} name="Login" />
        </div>
      </div>
      <Navbar />
    </div>
  );
};
export default CustomHeaderLp;

import { useNavigate } from "react-router-dom";
import ButtonDefault from "../button/button_default";
import LinkDefault from "../link/link_default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../asset/LOGO.png";

const NavbarV2 = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-blue-500 text-white font-semibold sticky top-0 z-20">
      <div className="w-full h-16 grid grid-cols-3 items-center px-3 md:px-5 lg:px-10">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo Varius Foods Riski" className="h-10 object-contain" />
          <p className="">Varios Foods Riski</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <LinkDefault link="/" name="Beranda" />
          <LinkDefault link="/product" name="Produk" />
          <LinkDefault link="/about-us" name="Tentang Kami" />
          <LinkDefault link="/contact" name="Kontak" />
        </div>
        <div className="flex items-center justify-end gap-3">
          <ButtonDefault
            name={
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faShoppingCart} />
                <p>Keranjang</p>
              </div>
            }
            handleClick={() => navigate("/register")}
            addClass={"bg-yellow-500"}
          />
          <ButtonDefault
            name={"Login"}
            handleClick={() => navigate("/register")}
            addClass={"bg-yellow-500"}
          />
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default NavbarV2;

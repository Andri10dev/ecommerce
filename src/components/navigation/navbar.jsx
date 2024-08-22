import LinkDefault from "../link/link_default";

const Navbar = () => {
  return (
    <div className="flex items-center justify-evenly bg-white font-semibold py-2 text-xl rounded-md">
      <LinkDefault link="/" name="Beranda" />
      <LinkDefault link="/product" name="Produk" />
      <LinkDefault link="/" name="Cara Pembelian" />
      <LinkDefault link="/" name="Hubungi Kami" />
    </div>
  );
};

export default Navbar;

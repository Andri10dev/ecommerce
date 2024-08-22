import { Helmet } from "react-helmet";
import LayoutDashboard from "../../../components/layout/dashboard";
import CardProduct from "../../../components/card/card_product";
import CustomHeader from "../../../components/custom/custom_header";
import ButtonDefault from "../../../components/button/button_default";
import { useHref, useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate()
  const currentPath = useHref()
  return (
    <>
      <Helmet>
        <title>Data Produk</title>
      </Helmet>
      <LayoutDashboard>
      <CustomHeader>
        <p className="font-semibold text-start">Data Produk</p>
      <div></div>
        <div className="flex justify-end">
        <ButtonDefault name="Tambah Product" handleClick={()=>navigate(`create?back_link=${currentPath}`)} />
        </div>
      </CustomHeader>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 md:px-5 lgpx-10 py-3">
          {Array.from({ length: 20 }).map(() => (
            <CardProduct />
          ))}
        </div>
      </LayoutDashboard>
    </>
  );
};
export default Product;

import { Helmet } from "react-helmet";
import LayoutDashboard from "../../../components/layout/dashboard";
import CardProduct from "../../../components/card/card_product";
import CustomHeader from "../../../components/custom/custom_header";
import ButtonDefault from "../../../components/button/button_default";
import { useHref, useNavigate } from "react-router-dom";
import ButtonBack from "../../../components/button/button_back";
import { useLocation } from "react-router-dom";

const SellingDetail = () => {
  const navigate = useNavigate()
  const currentPath = useHref()
  const location = useLocation();
  const back_link = new URLSearchParams(location.search).get('back_link');
  return (
    <>
      <Helmet>
        <title>Detail Penjualan</title>
      </Helmet>
      <LayoutDashboard>
      <CustomHeader>
      <ButtonBack link={back_link}  />
        <p className="font-semibold text-center">Detail Penjualan</p>
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
export default SellingDetail;

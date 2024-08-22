import { Helmet } from "react-helmet";
import LayoutDashboard from "../../../components/layout/dashboard";
import CustomHeader from "../../../components/custom/custom_header";
import ButtonDefault from "../../../components/button/button_default";
import { useLocation } from "react-router-dom";
import ButtonBack from "../../../components/button/button_back";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const ProductCreate = () => {
  const location = useLocation();
  const back_link = new URLSearchParams(location.search).get('back_link');
  return (
    <>
      <Helmet>
        <title>Tambah Produk</title>
      </Helmet>
      <LayoutDashboard>
        <CustomHeader>
          <ButtonBack link={back_link}  />
          <p className="font-semibold text-center text-2xl">Tambah Produk</p>
          <div className="flex justify-end">
            <ButtonDefault name={
            <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faSave} />
            <p>Simpan Data</p>
            </div>
            } />
          </div>
        </CustomHeader>
       
      </LayoutDashboard>
    </>
  );
};
export default ProductCreate;
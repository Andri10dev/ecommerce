import { Helmet } from "react-helmet";
import { useHref, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LayoutDashboard from "../../../../components/layout/dashboard";
import CustomHeader from "../../../../components/custom/custom_header";
import ButtonBack from "../../../../components/button/button_back";
import ButtonDefault from "../../../../components/button/button_default";

const AdminCreate = () => {
  const navigate = useNavigate()
  const currentPath = useHref()
  const location = useLocation();
  const back_link = new URLSearchParams(location.search).get('back_link');
  return (
    <>
      <Helmet>
        <title>Admin Baru</title>
      </Helmet>
      <LayoutDashboard>
      <CustomHeader>
      <ButtonBack link={back_link}  />
        <p className="font-semibold text-center">Admin Baru</p>
        <div className="flex justify-end">
        <ButtonDefault name="Tambah Product" handleClick={()=>navigate(`create?back_link=${currentPath}`)} />
        </div>
      </CustomHeader>
        
      </LayoutDashboard>
    </>
  );
};
export default AdminCreate;

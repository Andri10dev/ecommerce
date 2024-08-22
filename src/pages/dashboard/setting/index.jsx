import { Helmet } from "react-helmet";

import LayoutDashboard from "../../../components/layout/dashboard";
import CustomHeader from "../../../components/custom/custom_header";

const Setting = () => {
  
  return (
    <>
      <Helmet>
        <title>Pengaturan</title>
      </Helmet>
      <LayoutDashboard>
        <CustomHeader>
          <p className="font-semibold text-start">Pengaturan</p>
          <div></div>
        </CustomHeader>
     
      </LayoutDashboard>
    </>
  );
};
export default Setting;

import { Helmet } from "react-helmet";
import LayoutDashboard from "../../../../components/layout/dashboard";
import CustomHeader from "../../../../components/custom/custom_header";
import ButtonBack from "../../../../components/button/button_back";
import { useLocation } from "react-router-dom";

const ConsumerDetail = () => {
  const location = useLocation();
  const back_link = new URLSearchParams(location.search).get("back_link");
  return (
    <>
      <Helmet>
        <title>Consumer Baru</title>
      </Helmet>
      <LayoutDashboard>
        <CustomHeader>
          <ButtonBack link={back_link} />
          <p className="font-semibold text-center">Detail Consumer</p>
        </CustomHeader>
      </LayoutDashboard>
    </>
  );
};
export default ConsumerDetail;

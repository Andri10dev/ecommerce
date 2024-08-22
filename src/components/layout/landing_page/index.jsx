import Footer from "../../../pages/landing_page/sections/footer";
import CustomHeaderLp from "../../custom/custom_header_lp";

const LayoutLandingPage = ({ children, modal }) => {
  return (
    <div className="w-full h-screen overflow-auto scrollbar-thin bg-custom-blue">
      {modal}
      <div className="px-10">
        <CustomHeaderLp />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LayoutLandingPage;

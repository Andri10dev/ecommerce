import { Helmet } from "react-helmet";
import LayoutDashboard from "../../../../components/layout/dashboard";
import CustomHeader from "../../../../components/custom/custom_header";
import ButtonDefault from "../../../../components/button/button_default";
import { useHref, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const navigate = useNavigate();
  const currentPath = useHref();
  return (
    <>
      <Helmet>
        <title>Data Admin</title>
      </Helmet>
      <LayoutDashboard>
        <CustomHeader>
          <p className="font-semibold text-start">Data Admin</p>
          <div></div>
          <div className="flex justify-end">
            <ButtonDefault
              name={
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPlus} />
                  <p>Admin Baru</p>
                </div>
              }
              handleClick={() => navigate(`create?back_link=${currentPath}`)}
            />
          </div>
        </CustomHeader>
        <div className="px-3 w-full overflow-x-auto">
          <table className="min-w-full max-w-screen-xl">
            <thead>
              <tr>
                <th className="px-3 py-2">No</th>
                <th className="px-3 py-2" colSpan={2}>
                  Waktu & Tanggal
                </th>
                <th className="px-3 py-2">Nama Konsumen</th>
                <th className="px-3 py-2">Produk Yang dibeli</th>
                <th className="px-3 py-2">Status</th>
              </tr>
            </thead>
          </table>
        </div>
      </LayoutDashboard>
    </>
  );
};
export default Admin;

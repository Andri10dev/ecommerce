import Sidebar from "../../navigation/sidebar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="w-full h-screen bg-white text-black flex ">
      <Sidebar />
      <div className="w-full h-screen overflow-auto scrollbar-thin">{children}</div>
    </div>
  );
};

export default LayoutDashboard;

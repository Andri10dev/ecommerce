import SidebarMainAdmin from "./main/admin";

const Sidebar = () => {
  return (
    <aside className="w-64 h-full overflow-auto bg-blue-500">
      <div className="w-full aspect-square flex items-center justify-center border-b-2 border-white">
        <div className=" w-[80%] aspect-square flex items-center justify-center bg-white text-black font-bold uppercase rounded-full">
          Logo
        </div>
      </div>
      <div className="px-3 py-2 flex flex-col gap-2">
        <SidebarMainAdmin />
      </div>
    </aside>
  );
};

export default Sidebar;

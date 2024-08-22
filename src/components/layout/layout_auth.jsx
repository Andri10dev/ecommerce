import Logo from "../../asset/LOGO.png";

const LayoutAuth = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-auto grid grid-cols-2">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img src={Logo} alt="Logo Various Foods Riski"  className="max-w-[300px] aspect-square object-contain"/>
        <p className="font-bold text-5xl uppercase">VARIOUS FOODS RISKI</p>
      </div>
      {children}
    </div>
  );
};

export default LayoutAuth;

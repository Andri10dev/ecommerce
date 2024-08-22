import LinkItemSideNav from "../../../link/link_item_sidenav";

const SidebarMainAdmin = () => {
  return (
    <>
      <LinkItemSideNav link={"/dashboard"} name="Dashboard" />
      <LinkItemSideNav link={"/dashboard/product"} name="Produk" />
      <LinkItemSideNav link={"/dashboard/selling"} name="Penjualan" />
      <LinkItemSideNav link={"/dashboard/user"} name="Pengguna" />
      <LinkItemSideNav link={"/dashboard/setting"} name="Pengaturan" />
      <LinkItemSideNav link={"/dashboard/product"} name="Keluar" addClass={"bg-red-500 text-white"} />
    </>
  );
};

export default SidebarMainAdmin;

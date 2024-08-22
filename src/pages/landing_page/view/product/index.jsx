import { Helmet } from "react-helmet";
import LayoutLandingPage from "../../../../components/layout/landing_page";
import CardProduct from "../../../../components/card/card_product";

const ProductLP = () => {
  return (
    <>
      <Helmet>
        <title>Produk</title>
      </Helmet>
      <LayoutLandingPage>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-3">
          {Array.from({ length: 20 }).map(() => (
            <CardProduct />
          ))}
        </div>
      </LayoutLandingPage>
    </>
  );
};

export default ProductLP;

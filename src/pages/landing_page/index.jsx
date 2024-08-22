import { Helmet } from "react-helmet";
import CardProduct from "../../components/card/card_product";
import { Carousel } from "flowbite-react";
import LayoutLandingPage from "../../components/layout/landing_page";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Various Foods Rizky</title>
      </Helmet>
      <LayoutLandingPage>
        <div className="w-full h-[400px] flex items-center justify-center">
          <div className="w-full h-[350px] rounded-3xl bg-gray-200">
            <Carousel>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                alt="..."
              />
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                alt="..."
              />
            </Carousel>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-3">
          {Array.from({ length: 7 }).map(() => (
            <CardProduct />
          ))}
        </div>

        {/* <div className="w-full bg-gray-900 text-white px-10 pt-5">
          <div className="grid grid-cols-3 gap-5 w-full">
            <div>
              <p className="text-2xl font-semibold">Testimoni</p>
              <p className="pt-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident explicabo atque rerum ab iste, blanditiis modi
                deleniti itaque vel, asperiores ratione magnam exercitationem
                quod voluptate sapiente, eius sunt laudantium. Quo!
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Kontak</p>
              <p className="pt-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident explicabo atque rerum ab iste, blanditiis modi
                deleniti itaque vel, asperiores ratione magnam exercitationem
                quod voluptate sapiente, eius sunt laudantium. Quo!
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Tentang Kami</p>
              <p className="pt-3 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident explicabo atque rerum ab iste, blanditiis modi
                deleniti itaque vel, asperiores ratione magnam exercitationem
                quod voluptate sapiente, eius sunt laudantium. Quo!
              </p>
            </div>
          </div>
          <div className="w-full border-t-2 h-16 mt-5">
            <p className="w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque
            </p>
          </div>
        </div> */}
      </LayoutLandingPage>
    </>
  );
};

export default LandingPage;

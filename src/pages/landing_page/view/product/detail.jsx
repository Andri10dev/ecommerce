import { Helmet } from "react-helmet";
import ButtonBack from "../../../../components/button/button_back";
import ButtonDefault from "../../../../components/button/button_default";
import CustomCurrency from "../../../../components/custom/custom_currency";
import StarRatings from "react-star-ratings";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import CardProduct from "../../../../components/card/card_product";

const DetailProductLp = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Helmet>
        <title>Detail Produk</title>
      </Helmet>
      <div className="w-full h-screen bg-white text-black overflow-auto scrollbar-thin">
        <div className="h-16 grid grid-cols-3 px-3 md:px-5 lg:px-10 bg-blue-500 sticky top-0 z-20 items-center text-white">
          <ButtonBack link={"/product"} addClass={"text-white"} />
          <div>
            <p className="text-center font-bold text-xl">Detail Produk</p>
          </div>
        </div>
        <div className="flex gap-3 px-3 md:px-5 lg:px-10 py-3">
          <div className="w-[35%]">
            <div className="w-full aspect-video rounded-xl bg-gray-300"></div>
            <div className="py-3">
              <div className="h-[80px] aspect-square rounded-xl bg-gray-300"></div>
            </div>
          </div>
          <div className="w-[65%]">
            <p className="text-xl font-bold line-clamp-2 text-start">
              Various Foods Rizky Various Foods Rizky Various Foods Rizky
              Various Foods Rizky Various Foods Rizky Various Foods Rizky
              Various Foods Rizky Various Foods Rizky Various Foods Rizky
            </p>

            <div className="flex items-end gap-3 font-semibold py-3">
              <p className="line-through">
                <CustomCurrency number={25000} />
              </p>
              <p className="text-2xl">
                <CustomCurrency number={25000} />
              </p>
            </div>
            <div className="flex items-center gap-3 pb-3">
              <StarRatings
                rating={4.5}
                starRatedColor="#eab308"
                starEmptyColor="#ef4444"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="2px"
              />
              <p className="font-bold">(4.5)</p>
            </div>

            <div className="flex flex-col gap-3 pt-10">
              <div className="flex items-center justify-start">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  disabled={quantity <= 1}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                  type="text"
                  inputMode="numeric"
                  value={quantity}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                      setQuantity(
                        value === "" ? 1 : Math.max(1, Number(value))
                      );
                    }
                  }}
                  className="mx-2 min-w-[200px] text-center border rounded py-2"
                  min="1"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <ButtonDefault
                  name="Tambah Kekeranjang"
                  addClass={"w-[200px] bg-green-400 hover:bg-green-500 "}
                />
                <ButtonDefault
                  name="Beli Sekarang"
                  addClass={"w-[200px] bg-blue-500"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-3 md:px-5 lg:px-10 p-3 ">
          <p className="text-xl font-bold border-b-2 border-black">
            Desripsi Produk
          </p>
          <p className="text-start pt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            aliquid iusto aliquam adipisci qui quis, dolorem voluptates animi
            ipsa non laudantium, rerum accusantium? Voluptas expedita dolorum
            quaerat beatae fugiat rem? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Reprehenderit, incidunt. Temporibus exercitationem
            iusto natus eaque, cum dignissimos, odio eos culpa dolorum cumque
            tempora. Porro maiores reprehenderit minus cupiditate aliquam atque.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit, incidunt. Temporibus exercitationem iusto natus
            eaque, cum dignissimos, odio eos culpa dolorum cumque tempora. Porro
            maiores reprehenderit minus cupiditate aliquam atque.
          </p>
        </div>

        <div className="px-3 md:px-5 lg:px-10 py-5">
          <p className="text-xl font-bold border-b-2 border-black">
            Produk Terkait
          </p>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-3">
            {Array.from({ length: 8 }).map(() => (
              <CardProduct />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProductLp;

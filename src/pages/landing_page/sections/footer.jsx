import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkDefault from "../../../components/link/link_default";
import Logo from "../../../asset/LOGO.png";

const Footer = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 p-3 gap-3 text-white bg-custom-yellow">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="bg-custom-blue rounded-full w-[40%] aspect-square">
              <img
                src={Logo}
                alt="Various Foods Riski"
                className="w-full aspect-square"
              />
            </div>
            <p className="font-semibold text-2xl text-white">
              Various Foods Riski
            </p>
          </div>
          <div>
            <p className="border-b-2 font-bold">Sosial Media</p>
            <div>
              <LinkDefault
                name={
                  <div className="flex items-center gap-3 font-semibold text-blue-500 hover:text-blue-600 transition-colors">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="w-5 aspect-square object-cover"
                    />
                    <p>Instagram</p>
                  </div>
                }
              />
              <LinkDefault
                name={
                  <div className="flex items-center gap-3 font-semibold text-blue-500 hover:text-blue-600 transition-colors">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="w-5 aspect-square object-cover"
                    />
                    <p>Facebook</p>
                  </div>
                }
              />
              <LinkDefault
                name={
                  <div className="flex items-center gap-3 font-semibold text-blue-500 hover:text-blue-600 transition-colors">
                    <FontAwesomeIcon
                      icon={faTiktok}
                      className="w-5 aspect-square object-cover"
                    />
                    <p>Tiktok</p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-3">
          <div>
            <p className="border-b-2 border-white font-bold">Alamat</p>
            <p className="text-justify text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              magni vel temporibus dicta doloremque eligendi nobis praesentium,
              odio possimus facere ullam dolor eius unde, quisquam officia
              accusantium. Ipsam, aperiam et!
            </p>
          </div>
          <div className="w-full aspect-video rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31664.724497627627!2d107.89301295737557!3d-7.230510861083326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b1e90e25ddc5%3A0xe74d9220620ff939!2sGarut%2C%20Kec.%20Garut%20Kota%2C%20Kabupaten%20Garut%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1722758305229!5m2!1sid!2sid"
              className="w-full aspect-video"
              title="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <p className="py-3 bg-gray-900 text-center font-bold text-white">
        &copy; Reserved By Aila
      </p>
    </div>
  );
};

export default Footer;

import { Helmet } from "react-helmet";
import InputPasswordDefault from "../../components/form/input_pasword_default";
import LayoutAuth from "../../components/layout/layout_auth";
import ButtonDefault from "../../components/button/button_default";
import { Link } from "react-router-dom";
import Logo from "../../asset/LOGO.png";
import { useState } from "react";
import InputDefault from "../../components/form/input_default";
import CustomSpinner from "../../components/custom/custom_spinner";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorPhoneNumber, setErrorPhoneNumber] = useState(null);
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      setErrorName(null);
      setErrorPhoneNumber(null);
      setErrorEmail(null);
      setErrorPassword(null);

      if (email.length < 1) {
        setErrorEmail("Email tidak boleh kosong..!");
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        // Validasi format email
        setErrorEmail("Format email tidak valid..!");
      } else if (password.length < 8) {
        setErrorPassword("Pasword harus memiliki minimal 8 karakter..!");
      }
    } catch (error) {}
    // setLoading(false);
  };
  return (
    <>
      <Helmet>
        <title>Daftar</title>
      </Helmet>
      <LayoutAuth>
        <form
          onSubmit={handleSubmit}
          className="p-10 w-full h-full flex items-center justify-center"
        >
          <div className="w-full shadow-md border p-5 rounded-xl flex flex-col gap-3">
            <div className="flex flex-col items-center justify-center gap-3 border-b-2 py-5 text-black">
              <img
                src={Logo}
                alt="Logo Various Foods Riski"
                className="w-20 aspect-square"
              />
              <p className="text-2xl font-bold">REGISTER</p>
            </div>
            <InputDefault
              id="name"
              name="Nama"
              value={name}
              setValue={setName}
              placeholder="masukan nama lengkap"
              errorMessage={errorName}
            />

            <InputDefault
              id="phoneNumber"
              name="No Telepon"
              value={phoneNumber}
              setValue={setPhoneNumber}
              placeholder="08************"
              errorMessage={errorPhoneNumber}
            />

            <InputDefault
              id="email"
              name="Email"
              value={email}
              setValue={setEmail}
              placeholder="example@gmail.com"
              errorMessage={errorEmail}
            />

            <InputPasswordDefault
              id="password"
              name="Password"
              value={password}
              setValue={setPassword}
              placeholder="12345678"
              errorMessage={errorPassword}
            />
            {/* 
            <div className="flex items-center justify-end w-full">
              <Link to="/">Lupa password..?</Link>
            </div> */}

            <ButtonDefault
              type="submit"
              addClass="w-full"
              name={
                loading ? <CustomSpinner addClass={"bg-black"} /> : "REGISTER"
              }
            />

            <div className="flex items-center justify-center gap-3">
              <p>Belum memiliki akun..?</p>{" "}
              <Link
                to="/login"
                className="text-custom-yellow font-semibold text-center"
              >
                LOGIN
              </Link>
            </div>
            <Link
              to="/"
              className="text-custom-yellow font-semibold text-center"
            >
              Kembali ke halaman utama
            </Link>
          </div>
        </form>
      </LayoutAuth>
    </>
  );
};

export default Register;

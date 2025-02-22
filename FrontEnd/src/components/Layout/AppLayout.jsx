import {Outlet} from "react-router-dom";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

const AppLayout = () => {
  return (
    <>
      <div className=" ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;

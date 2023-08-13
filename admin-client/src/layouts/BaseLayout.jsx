import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { ToastContainer } from 'react-toastify';

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default BaseLayout;

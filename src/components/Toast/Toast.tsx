import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ToastMsg = (props: any) => {
  const {bar,closetime, theme} = props
  return (
    <>
      <ToastContainer
        style={{ width: "auto" }}
        position="top-center"
        autoClose={closetime}
        hideProgressBar={bar}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </>
  );
};

export default ToastMsg;

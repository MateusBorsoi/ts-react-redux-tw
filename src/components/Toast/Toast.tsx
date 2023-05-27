import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ToastMsg = (props: any) => {
  return (
    <>
      <ToastContainer
        style={{ width: "auto" }}
        position="top-center"
        autoClose={5000}
        hideProgressBar={props.bar}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={props.theme}
      />
    </>
  );
};

export default ToastMsg;

"use client";

const Modal = (props: any) => {
  const { titulo, texto, txtbtn, onConfirm, onClose} = props;

  const handleConfirm = () => {
    onConfirm()
    onClose()
   
  };

  return (
     
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">{titulo}</h3>
                </div>
             
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {texto}
                  </p>
                </div>
             
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" text-indigo-500 border border-indigo-400 active:text-white active:bg-indigo-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg hover:shadow-indigo-500 outline-none focus:outline-none mr-8 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClose}
                  >
                    Fechar
                  </button>
                  <button
                    className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onConfirm}
                  >
                    {txtbtn}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  
  );
};

export default Modal;

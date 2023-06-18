'use client'

const Footer = () => {

  let time = new Date()
  return (
    <div className="h-full w-full grid grid-cols-1 md:grid-cols-3">
    <div className="bg-gray-200 border-2 border-blue-400 ">Parte Superior 1</div>
    <div className="bg-gray-300">Parte Superior 2</div>
    <div className="bg-gray-400">Parte Superior 3</div>
    <div className="col-span-3 bg-gray-500">Parte Inferior</div>
  </div>
  );
};

export default Footer;

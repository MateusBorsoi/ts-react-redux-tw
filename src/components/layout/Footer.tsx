"use client";

const Footer = () => {
  let time = new Date();

  return (
    <div className="flex h-[100px] bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 justify-center content-center text-white font-bold text-md">
      <p className="h-full pt-8">Borzy @ {time.getFullYear()}</p>
    </div>
  );
};

export default Footer;

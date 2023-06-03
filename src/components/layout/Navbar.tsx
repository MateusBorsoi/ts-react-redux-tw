import { Grid, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-44 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className="flex ">
        <div className="w-16 h-16 border-2 text-white">LOGO</div>
      </div>
      <div className="w-16 h-16 border-2 ml-auto text-white">
      BTN1
      </div>
      <div className="w-16 h-16 border-2 text-white">
      BTN2
      </div>
      <div className="w-16 h-16 border-2 text-white">
      BTN3
      </div>
      <div className="w-16 h-16 border-2 mb-28 text-white">
      USER
      </div>
    </div>
  );
};

export default Navbar;

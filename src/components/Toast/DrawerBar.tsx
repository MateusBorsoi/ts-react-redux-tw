import { selectDrawer } from "@/redux/selectors/drawerSelector";
import { drawer } from "@/redux/slices/DrawerSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  direction: string;
  origem: string;
  children: React.ReactNode;
};

const DrawerBar = ({ direction, origem, children }: Props) => {
  const [open, setOpen] = useState<boolean>();
  const drawerOption = useSelector(selectDrawer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (drawerOption.origem === origem) {
      setOpen(drawerOption.open);
    }
  }, [drawerOption]);

  function handleDirection() {
    if (direction === "right") {
      return "translate-x-full";
    }
    if (direction === "left") {
      return "-translate-x-full";
    }
  }

  useEffect(() => {
    if (open === true) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [open]);

  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (open
          ? `transition-opacity opacity-100 duration-500 translate-x-0 ${handleDirection} `
          : ` transition-all delay-500 opacity-0 translate-x-full ${handleDirection} `)
      }
    >
      <section
        className={
          `w-screen max-w-lg ${direction}-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform` +
          (open ? " translate-x-0 " : `${handleDirection}`)
        }
      >
        <article className="relative w-auto pb-10 flex flex-col space-y-6 overflow-y-hidden h-full">
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          dispatch(drawer({ open: false, origem: origem }));
        }}
      ></section>
    </main>
  );
};

export default DrawerBar;

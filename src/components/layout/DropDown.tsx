import { DropDownProps } from "@/types/components/DropdownTypes";
import { createPopper } from "@popperjs/core";
import { useState, useEffect } from "react";
import { VscClose } from "react-icons/vsc";

const DropDown: React.FC<DropDownProps> = (props) => {
  const { buttonLabel, placement, children } = props;

  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );

  const toggleDropDown = () => {
    setDropDownOpen(!dropDownOpen);
  };

  const closeDropDown = () => {
    setDropDownOpen(false);
  };



  useEffect(() => {
    if (referenceElement && popperElement) {
      const popperInstance = createPopper(referenceElement, popperElement, {
        placement,
      });

      return () => {
        popperInstance.destroy();
      };
    }
  }, [referenceElement, popperElement, placement]);

  const handleContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const handleCloseButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    closeDropDown();
  }

  return (
    <div>
      <button ref={setReferenceElement} onClick={toggleDropDown}>
        {buttonLabel}
      </button>
      {dropDownOpen && (
        <div ref={setPopperElement} onClick={handleContentClick}>
          {children}
          <button className="absolute top-0 right-0 mt-2 flex items-center py-2 px-4 text-white hover:text-indigo-500 text-lg font-bold rounded-lg cursor-pointer"  
          onClick={handleCloseButtonClick}><VscClose/></button>
          
        </div>
      )}
    </div>
  );
};

export default DropDown

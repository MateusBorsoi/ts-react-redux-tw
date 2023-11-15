import { useState, useEffect, useRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  titulo: string;
  possuiErro?: boolean;
}

const InputField = ({ className, titulo, ...atributes }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(inputRef?.current?.value !== "");
    };

    const inputElement = inputRef.current;

    inputElement?.addEventListener("focus", handleFocus);
    inputElement?.addEventListener("blur", handleBlur);

    return () => {
      inputElement?.removeEventListener("focus", handleFocus);
      inputElement?.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <div className={`relative ${isFocused ? "focused" : ""}`}>
      <label
        htmlFor="inputField"
        className={`absolute left-2 transition-all duration-250 bg-white ${
          isFocused
            ? "-top-2.5 text-sm text-gray-600"
            : "top-2 text-base text-gray-400"
        }`}
      >
        {titulo}
      </label>
      <input
        id="inputField"
        ref={inputRef}
        type="text"
        className="w-full p-2 border outline-none"
        {...atributes}
      />
    </div>
  );
};

export default InputField;

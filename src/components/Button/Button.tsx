"use client";

import { Fragment, useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  rippleColor?: string;
  rippleDuration?: number;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

const Button = ({
  children,
  className,
  rippleColor,
  rippleDuration,
  onClick,
  ...atributes
}: ButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, id: Date.now() };

    setRipples([...ripples, newRipple]);

    onClick && onClick(e);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((r) => r !== newRipple));
    }, 600);
  };

  return (
    <Fragment>
      <button
        onClick={handleClick}
        className={`${className} relative overflow-hidden focus:outline-none px-8 py-2 w-auto h-auto rounded-lg shadow-lg `}
        {...atributes}
      >
        {children}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="ripple-effect"
            style={{
              left: ripple.x + "px",
              top: ripple.y + "px",
              width: ripple.size + "px",
              height: ripple.size + "px",
              opacity: "50%",
              animation: `ripple-animation ${rippleDuration ?? 1.5}s linear`,
              backgroundColor: rippleColor
                ? rippleColor
                : "rgba(255, 255, 255);",
            }}
          />
        ))}
      </button>
    </Fragment>
  );
};

export default Button;

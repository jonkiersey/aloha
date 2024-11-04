import { Link, LinkProps } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  canStart?: boolean;
  delay?: number;
  linkProps?: LinkProps;
  text: string;
  onFinished?: () => void;
};

const useTypewriter = ({
  canStart = true,
  delay = 500,
  linkProps,
  text,
  onFinished,
}: Props) => {
  const [length, setLength] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!canStart) {
      return;
    }
    const now = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - now;
      const index = Math.floor(elapsedTime / delay);

      if (index < text.length + 1) {
        setLength(index);
      } else {
        if (onFinished) {
          onFinished();
        }
        setIsFinished(true);
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [canStart, delay, onFinished, text]);

  const typewritten = text.slice(0, length);
  const untyped = text.slice(length);
  const element: JSX.Element = (
    <>
      {linkProps ? <Link {...linkProps}>{typewritten}</Link> : typewritten}
      <span style={{ color: "transparent" }}>{untyped}</span>
    </>
  );

  return {
    typewritten,
    untyped,
    isFinished,
    element,
  };
};

export default useTypewriter;

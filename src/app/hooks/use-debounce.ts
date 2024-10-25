import { useEffect, useRef } from "react";

type Props = {
  callback: () => void;
  delayMS: number;
};
const useDebounce = ({ callback, delayMS }: Props) => {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutId.current !== null) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      callback();
    }, delayMS);
    return () => {
      if (timeoutId.current !== null) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [callback, delayMS]);
};

export default useDebounce;

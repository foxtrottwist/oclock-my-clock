import { useEffect, useState } from "react";

export function useSynchronizedTimeout<T>(delay: number, fn: () => T) {
  const [value, setValue] = useState(fn);

  useEffect(() => {
    const handle = setTimeout(
      () => {
        setValue(fn());
      },
      delay - (Date.now() % delay),
    );

    return () => {
      clearTimeout(handle);
    };
  }, [delay, fn, value]);

  return value;
}

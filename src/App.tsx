import { useEffect, useState } from "react";
import { Node, getBinaryTime } from "./helpers";
import "./App.css";

export function App() {
  const [time, setTime] = useState(getBinaryTime);

  useEffect(() => {
    const timeoutID = setTimeout(
      () => {
        setTime(getBinaryTime());
      },
      60000 - (Date.now() % 60000),
    );
    return () => {
      clearTimeout(timeoutID);
    };
  }, [time]);

  return (
    <>
      <header className="min-h-48 w-full p-20 text-center md:text-9xl text-7xl text-slate-800 dark:text-white-smoke">
        <h1>{`O'Clock! My Clock!`}</h1>
      </header>

      <div className="flex justify-center md:p-20">
        <div className="flex flex-col items-end gap-4">
          <div className="flex gap-3 md:gap-0.5">
            <Bit node={time.hours.head} />
          </div>

          <div className="flex gap-3 md:gap-0.5">
            <Bit node={time.minutes.head} />
          </div>
        </div>
      </div>
    </>
  );
}

function Bit({ node }: { node?: Node<number> }) {
  if (!node) return;

  return (
    <>
      <figure
        className="h-10 w-6 md:h-36 md:w-24 text-4xl md:text-7xl font-medium text-slate-800 dark:text-white-smoke bit-box"
        style={node.data ? { transform: "rotateY(180deg)" } : undefined}
      >
        <div className="bit-front">0</div>
        <div className="bit-back">1</div>
      </figure>

      <Bit node={node.next} />
    </>
  );
}

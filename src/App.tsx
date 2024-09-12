import { useEffect, useState } from "react";
import "./App.css";
import { Node, getBinaryTime } from "./helpers";

const date = new Date();

export function App() {
  const [time, setTime] = useState(getBinaryTime);

  useEffect(() => {
    const handle = setInterval(() => {
      setTime(getBinaryTime());
    }, 60 - date.getSeconds());

    return () => {
      clearInterval(handle);
    };
  }, []);

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

  const style = node.data ? { transform: "rotateX(180deg)" } : undefined;

  return (
    <>
      <figure
        className="h-10 w-6 md:h-36 md:w-24 bg-white-smoke dark:bg-slate-700 text-4xl md:text-7xl font-medium text-slate-800 dark:text-white-smoke bit-box"
        style={style}
      >
        <div className="bit-box_content" style={style}>
          <div className="flex items-center justify-center bit-front">0</div>
          <div className="flex items-center justify-center bit-back">1</div>
        </div>
      </figure>

      <Bit node={node.next} />
    </>
  );
}

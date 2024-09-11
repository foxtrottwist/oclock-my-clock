import { useState } from "react";
import "./App.css";

export function App() {
  const [flip, set] = useState(false);

  return (
    <>
      <header className="min-h-48 w-full md:p-0 p-4 text-center">
        <h1 className="text-9xl">{`O'Clock! My Clock!`}</h1>
      </header>

      <div className="text-center p-4">
        <button
          className="h-10 px-6 font-semibold rounded border border-slate-200 text-slate-900"
          onClick={() => set((v) => !v)}
          type="button"
        >
          Flip
        </button>
      </div>

      <div className="md:flex justify-center">
        <div className="md:flex flex-col items-end gap-4">
          <div className="md:flex gap-0.5">
            <BitBox flip={flip} />
            <BitBox flip={flip} />
            <BitBox flip={flip} />
            <BitBox flip={flip} />
            <BitBox flip={flip} />
          </div>

          <div className="md:flex gap-0.5">
            <BitBox flip={flip} />
            <BitBox flip={flip} />
            <BitBox flip={flip} />
            <BitBox flip={flip} />
            <BitBox flip={flip} />
            <BitBox flip={flip} />
          </div>
        </div>
      </div>
    </>
  );
}

export function BitBox({ flip }: { flip: boolean }) {
  const style = flip ? { transform: "rotateX(180deg)" } : undefined;

  return (
    <figure className="rounded-xl h-20 w-16 bit-box" style={style}>
      <div className="bit-box_content" style={style}>
        <div className="md:flex items-center justify-center text-5xl font-medium bg-slate-100 rounded p-8 md:p-0 bit-box_front">
          1
        </div>
        <div className="md:flex items-center justify-center text-5xl font-medium bg-slate-100 rounded p-8 md:p-0 bit-box_back">
          0
        </div>
      </div>
    </figure>
  );
}

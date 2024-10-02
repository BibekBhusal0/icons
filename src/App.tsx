import { useState } from "react";
import Grid from "./component/grid";
import { twMerge } from "tailwind-merge";
import ModeToggle from "./component/mode-toggle";

function App() {
  const [dark, setDark] = useState(true);
  return (
    <div
      className={twMerge(
        "size-full p-2 overflow-auto h-screen",
        dark ? "bg-black text-white dark" : "bg-white text-black"
      )}>
      <div className="w-full p-3">
        <ModeToggle dark={dark} setDark={(mode: boolean) => setDark(mode)} />
      </div>
      <Grid />
    </div>
  );
}

export default App;

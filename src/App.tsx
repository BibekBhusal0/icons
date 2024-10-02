import Grid from "./component/grid";
import { twMerge } from "tailwind-merge";
import ThemeSwitch from "@/theme/switch";

function App() {
  return (
    <div className={twMerge("size-full p-2 overflow-auto h-screen")}>
      <div className="w-full p-3">
        <ThemeSwitch />
      </div>
      <Grid />
    </div>
  );
}

export default App;

import Grid from "./components/grid";
import { twMerge } from "tailwind-merge";
import ThemeSwitch from "@/theme/switch";

function App() {
  return (
    <div className={twMerge("size-full p-2 h-screen")}>
      <div className="w-full p-3 flex gap-4">
        <ThemeSwitch />
      </div>
      <Grid />
    </div>
  );
}

export default App;

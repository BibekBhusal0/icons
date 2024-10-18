import Grid from "./components/grid";
import { twMerge } from "tailwind-merge";
import ThemeSwitch from "@/theme/switch";
import SelectedIconTable from "./components/selected-icon-table";

function App() {
  return (
    <div className={twMerge("size-full p-2 h-screen")}>
      <div className="w-full p-3 flex gap-4">
        <ThemeSwitch />
      </div>
      <Grid />
      <SelectedIconTable />
    </div>
  );
}

export default App;

import ThemeSwitch from "@/theme/switch";
import { SelectIconPackPage } from "./components/selectIconPack";
import { ScrollArea } from "./components/ui/scroll-area";

function App() {
  return (
    <ScrollArea className="size-full p-2 h-screen">
      <div className="w-full p-3 flex gap-4">
        <ThemeSwitch />
      </div>
      <SelectIconPackPage />
    </ScrollArea>
  );
}

export default App;

import { listIcons } from "@iconify/react/dist/iconify.js";
import { FunctionComponent, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import type { IconifyInfo, IconifyJSON } from "@iconify/types";
import IconsGrid from "./icon-grid";

export interface SelectIconProps {
  icon: string;
  setIcon: (icon: string) => void;
}

export const iconPacks = [
  "oui",
  "raphael",
  "flat-color-icons",
  "eva",
  "fe",
  "gridicons",
  "maki",
  "zondicons",
  "el",
  "mingcute",
  "tdesign",
  "material-symbols",
  "ic",
  "hugeicons",
  "jam",
  "noto",
  "noto-v1",
  "fluent-emoji-flat",
];

const SelectIcon: FunctionComponent<SelectIconProps> = ({
  icon,
  setIcon,
}: SelectIconProps) => {
  const [currentMode, setCurrentMode] = useState("Loaded");
  const [selected, setSelected] = useState(icon);
  const [iconsList, setIconsList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchIcons = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.iconify.design/collection?prefix=${currentMode}`
        );

        if (!response.ok || !response || response.status !== 200) {
          return;
        }

        const data: APIv2CollectionResponse = await response.json();

        const formattedIcons: string[] = [];

        if (data.categories) {
          for (const category in data.categories) {
            formattedIcons.push(
              ...data.categories[category].map(
                (iconName) => `${data.prefix}:${iconName}`
              )
            );
          }
        }
        if (data.uncategorized) {
          formattedIcons.push(
            ...data.uncategorized.map(
              (iconName) => `${data.prefix}:${iconName}`
            )
          );
        }
        if (data.hidden) {
          formattedIcons.push(
            ...data.hidden.map((iconName) => `${data.prefix}:${iconName}`)
          );
        }

        setIconsList(formattedIcons);
      } catch (error) {
        console.error("Error fetching icons:", error);
      } finally {
        setLoading(false);
      }
    };

    if (currentMode === "Loaded") {
      setIconsList(listIcons());
    } else fetchIcons();
  }, [currentMode]);
  return (
    <div className="size-full flex flex-col items-center gap-3">
      <div
        className="flex flex-col items-center gap-3 w-full"
        onClick={(e) => {
          e.preventDefault();
        }}
        //
      >
        <SelectIconType
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
        />
        <IconsGrid
          iconsList={iconsList}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <Button onClick={() => setIcon(selected)}>Change</Button>
    </div>
  );
};

export default SelectIcon;

function SelectIconType({
  currentMode,
  setCurrentMode,
}: {
  currentMode: string;
  setCurrentMode: (mode: string) => void;
}) {
  return (
    <Select value={currentMode} onValueChange={setCurrentMode}>
      <SelectTrigger>
        <SelectValue placeholder={"Icon pack"} />
        <SelectContent>
          <SelectItem value="Loaded">Loaded</SelectItem>
          {iconPacks.map((pack: string) => (
            <SelectItem value={pack}>{pack}</SelectItem>
          ))}
        </SelectContent>
      </SelectTrigger>
    </Select>
  );
}

export interface APIv2CollectionResponse {
  prefix: string;
  total: number;
  title?: string;
  info?: IconifyInfo;
  uncategorized?: string[];
  categories?: Record<string, string[]>;
  hidden?: string[];
  aliases?: Record<string, string>;
  chars?: Record<string, string>;
  themes?: IconifyJSON["themes"];
  prefixes?: IconifyJSON["prefixes"];
  suffixes?: IconifyJSON["suffixes"];
}

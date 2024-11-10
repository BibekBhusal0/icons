import {
  allRequiredIcons,
  iconPackNames,
  keyWords,
  requiredIcons,
  searchIcons,
} from "@/icons";
import { useEffect, useState } from "react";
import SelectedIconTable from "./selected-icon-table";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ScrollArea } from "./ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { cn } from "@/lib/utils";

export type IconPackType = Record<
  string,
  Partial<Record<allRequiredIcons, string>>
>;
export interface selectIconPackProps {
  selectedIcons: IconPackType;
  setSelectedIcons: (icons: IconPackType) => any;
}
export interface selectIconProps {
  prefix: string;
  title: allRequiredIcons;
  icon?: string;
  setSelectedIcon: (icon: string | undefined) => any;
}

export function SelectIconPackPage() {
  const [selectedIcons, setSelectedIcons] = useState<IconPackType>({});

  return (
    <div className="p-2 flex flex-col gap-4">
      <SelectIconPack
        {...{
          selectedIcons,
          setSelectedIcons: (icons) => setSelectedIcons(icons),
        }}
      />
      <Button
        className="text-3xl py-7 my-5 flex items-center gap-4"
        onClick={() => {
          navigator.clipboard.writeText(JSON.stringify(selectedIcons));
        }}>
        <Icon icon="akar-icons:copy" />
        Copy
      </Button>
      <SelectedIconTable SelectedIconPacks={selectedIcons} usePrefix={false} />
    </div>
  );
}

function SelectIconPack({
  selectedIcons,
  setSelectedIcons,
}: selectIconPackProps) {
  const [index, setIndex] = useState(0);
  const allPacks = Object.keys(iconPackNames);
  const numIconPack = allPacks.length;
  const pack = allPacks[index];

  const PackName = iconPackNames[pack] || pack;
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % numIconPack);
  };
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + numIconPack) % numIconPack);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">{PackName}</h1>
        {requiredIcons.map((iconName, i) => (
          <IconSelect
            key={i}
            title={iconName}
            icon={selectedIcons[pack]?.[iconName]}
            prefix={pack}
            setSelectedIcon={(icon) => {
              setSelectedIcons({
                ...selectedIcons,
                [pack]: { ...selectedIcons[pack], [iconName]: icon },
              });
            }}
          />
        ))}
        <div className="flex items-center justify-between gap-4 p-4">
          <Button
            className="flex items-center justify-center gap-2"
            variant="outline"
            onClick={handlePrev}>
            <Icon icon="mingcute:up-line" rotate={135} className="size-4" />
            <div className="text-xl">Previous</div>
          </Button>
          <Button
            className="flex items-center justify-center gap-2"
            onClick={handleNext}
            variant="outline">
            <div className="text-xl">Next</div>
            <Icon icon="mingcute:up-line" rotate={45} className="size-4" />
          </Button>
        </div>
      </div>
    </>
  );
}

function IconSelect({ icon, prefix, setSelectedIcon, title }: selectIconProps) {
  const allSearchTerms = [title, ...keyWords[title]];
  const [searched, setSearched] = useState<string[]>([title]);
  const [icons, setIcons] = useState<string[]>([]);
  useEffect(() => {
    const fetchIcons = async () => {
      const promises = searched.map((term) => searchIcons(term, 20, prefix));
      const results = await Promise.all(promises);
      const searchedIcons = results.flat();
      setIcons(searchedIcons);
    };
    fetchIcons();
  }, [searched, prefix]);

  return (
    <div className="w-full">
      <div className="flex gap-4 items-center justify-between w-full">
        <div className="text-xl">{title}</div>
        <ToggleGroup
          type="multiple"
          variant="outline"
          size="sm"
          value={searched}
          onValueChange={setSearched}>
          {allSearchTerms.map((term, i) => (
            <ToggleGroupItem value={term} key={i}>
              {term}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <ScrollArea>
        {icons.map((ThisIcon, i) => (
          <Icon
            key={i}
            icon={ThisIcon}
            className={cn(
              "size-10 inline-block cursor-pointer",
              ThisIcon === icon && "border-2 border-primary"
            )}
            onClick={() => setSelectedIcon(ThisIcon)}
          />
        ))}
      </ScrollArea>
    </div>
  );
}

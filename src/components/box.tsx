import { Icon } from "@iconify/react";
import { LoremIpsum } from "lorem-ipsum";
import { useState } from "react";
import ScrollableContainer from "./scroll-container";
import { twMerge } from "tailwind-merge";
import SelectIcon, { SelectIconProps } from "./select-icon";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const contentGenerator = new LoremIpsum({
  sentencesPerParagraph: { max: 5, min: 2 },
  wordsPerSentence: { max: 20, min: 6 },
});
const titleGenerator = new LoremIpsum({ wordsPerSentence: { max: 4, min: 1 } });
export const boxClasses =
  "h-80 relative shadow-md shadow-gray-600 rounded-2xl border-green-400 border-2 p-4 rounded-2xl";

function Box(props: SelectIconProps) {
  const [title] = useState(titleGenerator.generateSentences(1));
  const [paragraph] = useState(contentGenerator.generateParagraphs(2));
  return (
    <div className={twMerge("gap-4 flex flex-col", boxClasses)}>
      <div className="flex items-center gap-3 text-xl h-[10%]">
        <Popover>
          <PopoverTrigger>
            <Icon className="text-4xl" icon={props.icon} />
            <PopoverContent>
              <SelectIcon {...props} />
            </PopoverContent>
          </PopoverTrigger>
        </Popover>
        <h1 className="text-2xl">{title}</h1>
      </div>
      <ScrollableContainer className="text-xl ">
        {paragraph.split("\n").map((para, index) => (
          <p key={index} className="mt-2">
            {para}
          </p>
        ))}
      </ScrollableContainer>
    </div>
  );
}

export default Box;

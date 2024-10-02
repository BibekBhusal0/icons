import { Icon } from "@iconify/react";
import { LoremIpsum } from "lorem-ipsum";
import { useState } from "react";
import ScrollableContainer from "./scroll-container";
import { twMerge } from "tailwind-merge";

const contentGenerator = new LoremIpsum({
  sentencesPerParagraph: { max: 5, min: 2 },
  wordsPerSentence: { max: 10, min: 6 },
});
const titleGenerator = new LoremIpsum({ wordsPerSentence: { max: 4, min: 1 } });
export const boxClasses =
  "h-80 relative shadow-md shadow-gray-600 rounded-2xl border-green-400 border-2 p-4 rounded-2xl";
function Box({ icon }: { icon: string }) {
  const [title] = useState(titleGenerator.generateSentences(1));
  const [paragraph] = useState(contentGenerator.generateParagraphs(20));
  return (
    <div className={twMerge("gap-4 flex flex-col", boxClasses)}>
      <div className="flex items-center gap-3 text-xl h-[10%]">
        <Icon className="text-4xl" icon={icon} />
        <h1>{title}</h1>
      </div>
      <ScrollableContainer className="text-xl h-80">
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

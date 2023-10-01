import ReactionSvg from "../assets/images/icon-reaction.svg";
import MemorySvg from "../assets/images/icon-memory.svg";
import VerbalSvg from "../assets/images/icon-verbal.svg";
import VisualSvg from "../assets/images/icon-visual.svg";
import SummaryItems from "./SummaryItems";

function RightBox() {
  return (
    <div className="w-full md:w-[375px] rounded-r-3xl p-8">
      <div className="text-2xl font-semibold text-[#303b5a]">Summary</div>
      <SummaryItems
        icon={ReactionSvg}
        title="Reaction"
        score={80}
        totalScore={100}
        style={{
          bg: "bg-[#ff575755]",
          title: "text-[#ff5757]",
        }}
      />
      <SummaryItems
        icon={MemorySvg}
        title="Memory"
        score={92}
        totalScore={100}
        style={{
          bg: "bg-[#ffb11f45]",
          title: "text-[#ffb01f]",
        }}
      />
      <SummaryItems
        icon={VerbalSvg}
        title="Verbal"
        score={61}
        totalScore={100}
        style={{
          bg: "bg-[#00bd914e]",
          title: "text-[#00bd91]",
        }}
      />
      <SummaryItems
        icon={VisualSvg}
        title="Visual"
        score={72}
        totalScore={100}
        style={{
          bg: "bg-[#1124d42c]",
          title: "text-[#1125d4]",
        }}
      />
      <button className="bg-[#303b5a] text-lg hover:bg-gradient-to-b from-[#7857ff] to-[#2e2be9] text-white w-full p-4 rounded-3xl mt-8">
        Continue
      </button>
    </div>
  );
}

export default RightBox;

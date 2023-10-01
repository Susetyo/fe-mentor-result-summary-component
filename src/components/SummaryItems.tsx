type TSummaryItems = {
  icon: string;
  title: string;
  score: number;
  totalScore: number;
  style: {
    bg: string;
    title: string;
  };
};

function SummaryItems({
  icon,
  title,
  score,
  totalScore,
  style,
}: TSummaryItems) {
  return (
    <div
      className={`flex justify-between ${style.bg} p-4 rounded-xl mt-4 w-full`}
    >
      <div className="flex gap-1">
        <img src={icon} alt="reaction-svg" />
        <div className={`${style.title} font-bold text-lg`}>{title}</div>
      </div>
      <div className="flex">
        <div className="text-[#303b5a] font-bold text-lg">{score}&nbsp;</div>
        <div className="text-[#303b5a5e] font-bold text-lg">/{totalScore}</div>
      </div>
    </div>
  );
}

export default SummaryItems;

function LeftBox() {
  return (
    <div className="w-full md:w-[375px] bg-gradient-to-b from-[#7957ff] to-[#2e2be9e9] rounded-bl-[50px] rounded-br-[50px] md:rounded-[50px] p-8 flex flex-col items-center">
      <div className="text-2xl font-semibold text-[#ebf1ff] text-center">
        Your Result
      </div>
      <div className="w-[200px] h-[200px] bg-gradient-to-b from-[#4e21ca] to-[#2421cab4] rounded-full mt-8 flex flex-col justify-center items-center gap-1">
        <div className="text-6xl text-white"> 76 </div>
        <div className="text-xl text-[#ebf1ff]"> of 100 </div>
      </div>
      <div className="text-4xl text-white mt-4">Great</div>
      <div className="text-[#ebf1ff] mt-4">
        You scored higher than 65% of the people who have taken these tests.
      </div>
    </div>
  );
}

export default LeftBox;

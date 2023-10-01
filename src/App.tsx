import { lazy, Suspense } from "react";

const LeftBox = lazy(() => import("./components/LeftBox.tsx"));
const RightBox = lazy(() => import("./components/RightBox.tsx"));

function App() {
  return (
    <Suspense fallback={<div> Loading... </div>}>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-full md:h-[70%] flex flex-wrap relative bg-white rounded-[50px] shadow-xl shadow-[#ebf1ff]">
          <LeftBox />
          <RightBox />
        </div>
      </div>
    </Suspense>
  );
}

export default App;

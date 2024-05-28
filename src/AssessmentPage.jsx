import { useCallback, useEffect, useState } from "react";
import { Question } from "./components/Question";
import { CompletedAssessment } from "./components/CompletedAssessment";
import { Counterdown } from "./components/Counterdown";

export const AssessmentPage = ({contest, result}) => {
  const shuffleQuestions = (questions) => {
    const shuffledQuestions = [...questions];
    let currentIndex = shuffledQuestions.length;

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      const temporaryValue = shuffledQuestions[currentIndex];
      shuffledQuestions[currentIndex] = shuffledQuestions[randomIndex];
      shuffledQuestions[randomIndex] = temporaryValue;
    }

    return shuffledQuestions;
  };

  const shuffledQuestions = shuffleQuestions(contest?.questions);

  const [next, setNext] = useState(0);
  const [quesAppear, setQuestionAppear] = useState(
    Array.from({ length: contest?.questions?.length }, () => false)
  );

  const handleTabChange = () => {
    setNext(contest?.questions?.length);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleKeyDown = (e) => {
    if (
      e.key.startsWith("F") ||
      e.key === "Escape"
    ) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("visibilitychange", handleTabChange);

    // Request full screen
    document.documentElement.requestFullscreen({navigationUI: "hide"});

    return () => {
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("visibilitychange", handleTabChange);
    };
  }, []);

  return (
    <>
      {next < contest?.questions?.length ? (
        <section className={`grid grid-cols-[25%_50%_25%] mx-5`}>
          <div className="border-2 border-gray-500 rounded-xl m-2 p-2 text-lg">
            <div className="text-black text-xl font-bold my-3">
                Rules & Regulation
              </div>
              {contest?.rules}
            </div>
          <div className="overflow-y-auto my-5 mx-10">
            <Question
              Question={shuffledQuestions[next]}
              number={next + 1}
              setNext={setNext}
              result={result._id}
              appeared={setQuestionAppear}
            />
          </div>
          <div className=" border-2 border-gray-500 rounded-xl m-3">
            <div className="mx-3 my-2">
                <span className="text-black text-xl font-bold">
                  TimeLeft: 
                </span>
                <Counterdown duration={contest?.duration} onCountdownEnd={()=> {
                    setNext(contest?.questions?.length);
                    alert("Time Over!");
                }}/>
            </div>
            <div className="mx-5 my-2 h-[76vh]">
              <span className="text-black text-xl font-bold">
                Question Attempted
              </span>
              <div className="overflow-y-auto h-[73vh] my-2">
              <div className="flex flex-row flex-wrap">
                {quesAppear.map((appear, index) => {
                  return (
                      <div key={index}
                        className={`p-3 m-5 w-12 h-12 text-center rounded-full cursor-not-allowed ${
                          index > next
                            ? "text-white bg-slate-400"
                            : appear
                            ? "text-white bg-green-500"
                            : "text-black bg-red-500"
                        }`}
                      >
                        {index + 1}
                      </div>
                  );
                })}
              </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <CompletedAssessment result={result} contest={contest} />
        </div>
      )}
    </>
  );
}
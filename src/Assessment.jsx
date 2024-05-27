import { useState } from "react";
import { Header } from "./components/Header";
import { Question } from "./components/Question";
import { CompletedAssessment } from "./components/CompletedAssessment";
import { Counterdown } from "./components/Counterdown";

export function Assessment({ contest, result }) {
  let questionLength = contest?.questions?.length;
  while (questionLength > 0) {
    const randomLength = Math.floor(Math.random() * questionLength);
    questionLength--;

    [contest.questions[questionLength], contest.questions[randomLength]] = [
      contest.questions[randomLength],
      contest.questions[questionLength],
    ];
  }

  const [next, setNext] = useState(0);
  const [quesAppear, setQuestionAppear] = useState(
    Array.from({ length: contest?.questions?.length }, (x, i) => false)
  );
  console.log(quesAppear);

  return (
    <>
      <Header user={result?.userId} contest={contest?.name} />
      {next < contest?.questions?.length ? (
        <section className={`grid grid-cols-[25%_50%_25%] m-5`}>
          <div className="border-2 border-gray-500 rounded-xl m-2 p-2 text-lg">{contest?.rules}</div>
          <div className="overflow-y-auto">
            <Question
              Question={contest?.questions[next]}
              number={next + 1}
              setNext={setNext}
              result={result._id}
              appeared={setQuestionAppear}
            />
          </div>
          <div>
            <div className="mx-5 my-2">
                <span className="text-black text-xl font-bold">
                  TimeLeft: 
                </span>
                <Counterdown duration={contest?.duration} onCountdownEnd={()=> {
                    alert("Time Over!");
                }}/>
            </div>
            <div className="overflow-y-auto mx-5 my-2 h-[76vh]">
              <span className="text-black text-xl font-bold">
                Question Attempted
              </span>
              <div className="flex flex-row flex-wrap overflow-y-auto">
                {quesAppear.map((appear, index) => {
                  return (
                    <>
                      <div
                        className={`p-3 m-5 w-12 text-center rounded-full cursor-not-allowed ${
                          index > next
                            ? "text-white bg-slate-400"
                            : appear
                            ? "text-white bg-green-500"
                            : "text-black bg-red-500"
                        }`}
                      >
                        {index + 1}
                      </div>
                    </>
                  );
                })}
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

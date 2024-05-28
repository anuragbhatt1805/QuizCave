import { useState } from "react";
import { Watermark } from "@hirohe/react-watermark";

export const Question = ({ Question, number, setNext, result, appeared }) => {
  const [answered, setAnswered] = useState(false);

  return (
    <>
      <Watermark text="Whiteboard Technology Pvt. Ltd." diagonal opacity={0.3} fontSize={35}>
        <div className="h-[80vh] w-full">
          {Question?.question && (
            <>
              <div className="text-black font-semibold text-xl flex flex-row justify-between">
                <span>{`${number}) ${Question.question}`}</span>
                <span className="text-red-500 font-medium font-mono text-lg">
                  {Question?.marks} {Question?.marks > 1 ? "marks" : "mark"}
                </span>
              </div>
            </>
          )}
          {Question?.questionImage && (
            <img
              src={Question.questionImage}
              alt="Question"
              className="mx-10 h-96"
            />
          )}
          {Question?.type === "short" && (
            <>
              <input
                type="text"
                placeholder="Answer"
                onChange={(e) => {
                  e.preventDefault();
                  setAnswered(true);
                }}
                className="border-2 border-gray-300 rounded-lg p-2 w-1/3 my-5"
              />
            </>
          )}
          {Question?.type === "long" && (
            <>
              <textarea
                placeholder="Answer"
                onChange={(e) => {
                  e.preventDefault();
                  setAnswered(true);
                }}
                className="border-2 border-gray-300 rounded-lg p-2 w-1/3 h-1/3 my-5 mx-10"
              />
            </>
          )}
          {Question?.type === "multiple" && (
            <>
              {Question.multipleQuestion.map((option, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[30%_70%] w-1/3 items-center mx-10"
                >
                  <label
                    htmlFor={index}
                    className="text-lg text-center font-semibold w-full"
                  >{`${index + 1}) ${option}`}</label>
                  <input
                    type="text"
                    placeholder={`Answer for ${option}`}
                    onChange={(e) => {
                      e.preventDefault();
                      setAnswered(true);
                    }}
                    className="border-2 border-gray-300 rounded-lg p-2 my-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              ))}
            </>
          )}
          {Question.type === "mcq" && (
            <>
              <div className="flex flex-col mx-10 my-4">
                {Question.mcqOptions.map((option, index) => (
                  <div
                    key={index}
                    className="flex flex-row w-1/3 items-center justify-center"
                  >
                    <input
                      type="radio"
                      name="mcq"
                      onChange={(e) => {
                        e.preventDefault();
                        setAnswered(true);
                      }}
                      id={index}
                      className="w-5 h-5 mx-4"
                    />
                    <label
                      htmlFor={index}
                      className="text-lg text-left font-semibold w-full"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </Watermark>
      <div>
        <button
          type="button"
          className="bg-gray-400 text-black font-bold p-2 rounded-lg m-5 w-32 hover:border-black hover:bg-white border-2"
          onClick={() => setNext((prev) => prev + 1)}
        >
          Next
        </button>
        <button
          type="button"
          className="bg-blue-500 text-white font-bold p-2 rounded-lg m-5 w-32 border-2 hover:border-blue-500 hover:text-blue-700 hover:bg-white"
          onClick={(e) => {
            e.preventDefault();
            setNext((prev) => prev + 1);
            appeared((prev) => {
              prev[number - 1] = answered;
              return [...prev];
            });
          }}
        >
          Save & Next
        </button>
      </div>
    </>
  );
};

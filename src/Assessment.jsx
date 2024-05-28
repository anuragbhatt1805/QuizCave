import { useState } from "react";
import { Header } from "./components/Header";
import { AssessmentPage } from "./AssessmentPage";
import { ContestRules } from "./components/ContestRules";

export function Assessment({ contest, result }) {

  const [assessmentPage, setAssessmentPage] = useState(false);

  return (
    <>
      <Header user={result?.userId} contest={contest?.name} />
      {
        (!assessmentPage) && (
          <>
            <ContestRules description={contest?.description} rules={contest?.rules} start={setAssessmentPage} />
          </>
        )
      }
      {
        (assessmentPage) && (
          <AssessmentPage result={result} contest={contest}/>
        )
      }
    </>
  );
}

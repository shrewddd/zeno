import { getProblems } from "@/lib/problems";
import { useCallback, useEffect, useMemo, useState } from "react"


const visibleDigitCount = 6;

// This whole file contains code that is not even close to being good, or being deployed
// I am fully aware of all of the issues, but there is something freeing about it
// Sometimes i just want to build something that just works, not optimal, something that is just, mid.
// I will remove this comment later once i feel like it
export const Index = () => {
  const [text, setText] = useState("");
  const [score, setScore] = useState(0);
  const [problemCount, setProblemCount] = useState(30)
  const [problemIndex, setProblemIndex] = useState(0)

  const problems = useMemo(() => {
    return getProblems(problemCount)
  }, [problemCount])

  const currentProblem = problems[problemIndex]

  const handleKeyPress = useCallback((event) => {

    let nextText: string = "";

    if (/^[\d.-]$/.test(event.key)) {
      nextText = `${text}${event.key}`
    } else if(event.key === "Backspace") {
      nextText = `${text.slice(0, -1)}`;
    }

    if (nextText === String(currentProblem.result)) {
      setText("")
      setProblemIndex(prevIndex => prevIndex + 1)
      setScore(prevScore => prevScore + 1)
    } else {
      setText(nextText)
    }
  }, [text, problems, problemIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);


	return (
    <div className="text-4xl font-semibold m-auto">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center">
        <div></div>
        <div className="shrink-0 whitespace-nowrap flex justify-center">{score}</div>
        <div></div>
        <div className="shrink-0 whitespace-nowrap text-right">{currentProblem.leftValue} {currentProblem.operator} {currentProblem.rightValue}</div>
        <div className="shrink-0 whitespace-nowrap flex justify-center px-2">=</div>
        <div
          className="shrink-0 overflow-hidden whitespace-nowrap tabular-nums"
          style={{ width: `${visibleDigitCount + 1}ch` }}
        >
          <div className="flex w-max items-center">
            <span>{text?.slice(-visibleDigitCount) ?? ""}</span>
            <span
              aria-hidden="true"
              className="answer-caret h-[1em] w-[1ch] shrink-0 bg-current"
            />
          </div>
        </div>
        </div>
    </div>
	);
};

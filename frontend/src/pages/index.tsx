import { Input } from "@/components/ui/input"
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"

type Problem = {
  operator: "+" | "-" | "/" | "*"
  leftValue: number
  rightValue: number
  result: number
}

const operators = ["+", "-", "/", "*"] as const;
const minValue = 2
const maxValue = 100

const getRandomInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;

}

const getProblems = (count: number) => {
  const problems: Problem[] = []
  for(let i = 0; i <= count; i++) {
    const leftValue = getRandomInRange(minValue, maxValue);
    const rightValue = getRandomInRange(minValue, maxValue);
    const operator: "+" | "-" | "/" | "*" = operators[Math.floor(Math.random() * (operators.length))]
    let result = 0;
    switch (operator) {
      case '+':
        result = leftValue + rightValue;
        break
      case '-':
        result = leftValue - rightValue;
        break
      case '*':
        result = leftValue * rightValue;
        break
      case '/':
        result = leftValue / rightValue;
        break
    }
    problems.push({leftValue, rightValue, operator, result})
  }
  return problems;
}

export const Index = () => {
  const [text, setText] = useState("");
  const answerRef = useRef<HTMLDivElement>(null)
  const [problemCount, setProblemCount] = useState(30)
  const [problemIndex, setProblemIndex] = useState(0)

  const problems = useMemo(() => {
    return getProblems(problemCount)
  }, [problemCount])

  const handleKeyPress = useCallback((event) => {
    if (/^\d+$/.test(event.key)) {
      setText(`${text}${event.key}`);
    } else if(event.key === "Backspace") {
      setText(`${text.slice(0, -1)}`);
    }
  }, [text]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  useLayoutEffect(() => {
    const answer = answerRef.current
    if (answer) {
      answer.scrollLeft = answer.scrollWidth
    }
  }, [text])

  const currentProblem = problems[problemIndex]

	return (
		<div className="text-4xl font-semibold text-white bg-black h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex flex-row gap-2">
        <div className="shrink-0 whitespace-nowrap">{currentProblem.leftValue} {currentProblem.operator} {currentProblem.rightValue} = </div>
        <div ref={answerRef} className="w-[6ch] shrink-0 overflow-hidden whitespace-nowrap tabular-nums">
          <div className="flex w-max items-center">
            <span>{text}</span>
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

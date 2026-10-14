import { useMemo, useState } from "react"

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
  const [problemCount, setProblemCount] = useState(30)
  const [problemIndex, setProblemIndex] = useState(0)
  const problems = useMemo(() => {
    return getProblems(problemCount)
  }, [problemCount])

  const currentProblem = problems[problemIndex]

	return (
		<div className="text-3xl text-white bg-black h-screen w-screen flex flex-col justify-center items-center">
      <div>{currentProblem.leftValue}{currentProblem.operator}{currentProblem.rightValue}</div>
		</div>
	);
};

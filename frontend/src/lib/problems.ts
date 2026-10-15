import { getRandomInRange } from "./random"

type Problem = {
  operator: "+" | "-" | "/" | "*"
  leftValue: number
  rightValue: number
  result: number
}

const operators = ["+", "-", "/", "*"] as const;

const operatorRanges = {
  "+": { left: { minValue: 2, maxValue: 100 }, right: { minValue: 2, maxValue: 100 }},
  "-": { left: { minValue: 2, maxValue: 100 }, right: { minValue: 2, maxValue: 100 }},
  "/": { left: { minValue: 2, maxValue: 100 }, right: { minValue: 2, maxValue: 12  }},
  "*": { left: { minValue: 2, maxValue: 100 }, right: { minValue: 2, maxValue: 12  }},
}

const allowNegative = false;

export const getProblems = (count: number) => {
  const problems: Problem[] = []
  while (problems.length < count) {
    const operator: "+" | "-" | "/" | "*" = operators[Math.floor(Math.random() * (operators.length))]
    let leftValue = getRandomInRange(operatorRanges[operator].left.minValue, operatorRanges[operator].right.maxValue);
    const rightValue = getRandomInRange(operatorRanges[operator].left.minValue, operatorRanges[operator].right.maxValue);
    let result = 0;
    switch (operator) {
      case '+':
        result = leftValue + rightValue;
        break
      case '-':
        result = leftValue;
        leftValue += rightValue;
        break
      case '*':
        result = leftValue * rightValue;
        break
      case '/':
        result = leftValue;
        leftValue *= rightValue;
        break
    }
    if(allowNegative) {
      problems.push({leftValue, rightValue, operator, result})
    } else if (result > 0) {
      problems.push({leftValue, rightValue, operator, result})
    }
  }
  return problems;
}

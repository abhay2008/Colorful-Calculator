class Tree {
  constructor(root, tree1, tree2) {
    if (typeof root === "number") {
      this.number = true;
      this.value = root;
    } else {
      this.number = false;
      this.operation = root;
      this.operand1 = tree1;
      this.operand2 = tree2;
    }
  }

  reduce() {
    if (this.number) {
      return this.value;
    } else if (this.operation === "+") {
      return this.operand1.reduce() + this.operand2.reduce(); // RECURSION!!!!!!!!!!
    } else if (this.operation === "-") {
      return this.operand1.reduce() - this.operand2.reduce(); // RECURSION!!!!!!!!!!
    } else if (this.operation === "*") {
      return this.operand1.reduce() * this.operand2.reduce(); // RECURSION!!!!!!!!!!
    } else if (this.operation === "/") {
      return this.operand1.reduce() / this.operand2.reduce(); // RECURSION!!!!!!!!!!
    } 
  }
}

function findOperator(expression, operator) {
  let level = 0;
  let result = -1;
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      level++;
    } else if (expression[i] === ")") {
      level--;
    } else if (expression[i] === operator && level === 0) {
      result = i;
    }
  }
  return result;
}

export default function parseExpression(expression) {
  console.log("Expression: " + expression);
  const plusIndex = findOperator(expression, "+");
  const minusIndex = findOperator(expression, "-");
  if (plusIndex > 0 && minusIndex < 0 || plusIndex > 0 && plusIndex > minusIndex) {
    const half1 = expression.slice(0, plusIndex);
    const half2 = expression.slice(plusIndex+1);
    return new Tree("+", parseExpression(half1), parseExpression(half2)); // RECURSION!!!!!!!!!!
  } else if (plusIndex < 0 && minusIndex > 0 || minusIndex > 0 && minusIndex > plusIndex) {
    const half1 = expression.slice(0, minusIndex);
    const half2 = expression.slice(minusIndex+1);
    return new Tree("-", parseExpression(half1), parseExpression(half2)); // RECURSION!!!!!!!!!!
  } else {
    const timesIndex = findOperator(expression, "*");
    const divideIndex = findOperator(expression, "/");
    if (timesIndex >= 0 && divideIndex < 0 || timesIndex >= 0 && timesIndex > divideIndex) {
      const half1 = expression.slice(0, timesIndex);
      const half2 = expression.slice(timesIndex+1);
      return new Tree("*", parseExpression(half1), parseExpression(half2)); // RECURSION!!!!!!!!!!
    } else if (timesIndex < 0 && divideIndex >= 0 || divideIndex >= 0 && divideIndex > timesIndex) {
      const half1 = expression.slice(0, divideIndex);
      const half2 = expression.slice(divideIndex+1);
      return new Tree("/", parseExpression(half1), parseExpression(half2)); // RECURSION!!!!!!!!!!
    } else {
      const trimmed = expression.trim();
      if (trimmed[0] === "(" && trimmed[trimmed.length - 1] === ")") {
        return parseExpression(trimmed.slice(1, -1));
      } else {
        return new Tree(parseNumber(trimmed));
      }
    }
  }
}

function parseNumber(num) {
    console.log("Number: " + num);
  if (/^ *[-+]?\d+(\.\d+)? *$/.test(num)) {
    return Number(num);
  }
}

const tree = parseExpression("20*(2+30-10)"); // A recursive function is function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function.... 
console.log(`✅ ${tree.reduce()}`); // A recursive function is function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function that calls a recursive function.... 
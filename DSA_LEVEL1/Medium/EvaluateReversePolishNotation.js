function EvaluateReversePolishNotation(tokens) {
  const ops = {
    "*": (a, b) => Number(a) * Number(b),
    "+": (a, b) => Number(a) + Number(b),
    "-": (a, b) => Number(a) - Number(b),
    "/": (a, b) => Math.trunc(Number(b) / Number(a)),
  };
  var evalRPN = function (tokens) {
    const stack = [];

    for (v of tokens) {
      if (ops[v]) {
        stack.push(ops[v](stack.pop(), stack.pop()));
      } else {
        stack.push(v);
      }
    }

    return stack[0];
  };

  evalRPN(tokens);
}

const tokens = ["2", "1", "+", "3", "*"];
console.log(EvaluateReversePolishNotation(tokens));

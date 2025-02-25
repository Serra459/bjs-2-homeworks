"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let solution = 0;
  let solutionSecond = 0;
  if (discriminant < 0) {
    let arr = [];
  }
  else if (discriminant == 0) {
    solution = - b / (2 * a);
    arr.push(solution);
    // let arr = [(- b / (2 * a))];
  } else {
    // solution = (-b + Math.sqrt(d) )/(2*a);
    // solutionSecond = (-b - Math.sqrt(d) )/(2*a);
    // arr.push(solution, solutionSecond);
    // // solution = (-b - Math.sqrt(d) )/(2*a);
    // // arr.push(solution);
    arr = [(-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a)];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let sum = amount - contribution;
  let payment = sum * (percent + (percent / (Math.pow((1 + percent), countMonths) - 1)));
  let sumFinaly = payment * countMonths;
  let fixedNumber = sumFinaly.toFixed(2);

  return Number.parseFloat(fixedNumber);
}
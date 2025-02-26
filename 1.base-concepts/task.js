"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant > 0) {
    arr = [(-b + Math.sqrt(discriminant) )/(2*a), (-b - Math.sqrt(discriminant) )/(2*a)];
  }
  else if (discriminant == 0) {
    arr = [- b / (2 * a)];
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
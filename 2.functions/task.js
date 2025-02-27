function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let avg = sum / arr.length;

  return { min: min, max: max, avg: Number.parseFloat(avg.toFixed(2)) };
}

function summElementsWorker(...arr) {
  let summElements = 0;
  if (arr.length === 0) {
    return summElements;
  }
  summElements = arr.reduce((accumulatorSum, currentValueSum) => accumulatorSum + currentValueSum, 0);
  return summElements;
}

function differenceMaxMinWorker(...arr) {
  let differenceMaxMin = 0;
  if (arr.length === 0) {
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  differenceMaxMin = max - min;

  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  sumEvenElement = 0;
  countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    } 
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  let res = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    res = func(...arrOfArr[i]);
    if (res > maxWorkerResult) {
      maxWorkerResult = res;
    }
  }
  return maxWorkerResult;
}

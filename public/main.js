function main() {
  const numberOfCupsOfCoffee = 0
  const fullName = 'Jerid Fenderson'
  console.log(
    `My name is ${fullName} and I drink ${numberOfCupsOfCoffee} cups of coffee`
  )

  const aboutMe = {
    fullName,
    luckyNumber: 73,
    favoriteMovies: ['The Iron Giant', 'The Avengers', 'The Green Mile'],
  }

  const userName = window.prompt('What is your name?')
  console.log(`Hello ${userName}! Nice to meet you`)

  const firstOperand = parseFloat(window.prompt('Give me a random number'))
  const secondOperand = parseFloat(window.prompt('Give me another number'))

  const sum = firstOperand + secondOperand
  const difference = firstOperand - secondOperand
  const product = firstOperand * secondOperand
  const quotient = firstOperand / secondOperand
  const remainder = firstOperand % secondOperand

  console.log(
    `${sum} is when you add ${firstOperand} and ${secondOperand} together`
  )
  console.log(
    `${difference} is when you subtract ${secondOperand} from ${firstOperand}`
  )
  console.log(
    `${product} is when you multiply ${firstOperand} and ${secondOperand} together`
  )
  console.log(
    `${quotient} is when you divide ${firstOperand} by ${secondOperand}`
  )
  console.log(
    `${remainder} is the remainder after dividing ${firstOperand} by ${secondOperand}`
  )

  const numbers = [
    41,
    2,
    26,
    93,
    77,
    11,
    52,
    28,
    60,
    20,
    88,
    84,
    41,
    84,
    84,
    45,
    26,
    12,
    48,
    72,
    34,
    64,
    2,
    50,
    68,
    82,
    90,
    84,
    92,
    99,
    20,
    5,
    65,
    19,
    99,
    59,
    72,
    48,
    49,
    87,
    89,
    32,
    16,
    4,
    49,
    11,
    60,
    92,
    46,
    46,
    10,
    16,
    69,
    22,
    34,
    62,
    16,
    52,
    76,
    33,
    15,
    43,
    38,
    13,
    98,
    48,
    47,
    66,
    47,
    35,
    11,
    36,
    72,
    74,
    3,
    57,
    57,
    33,
    87,
    54,
    23,
    64,
    87,
    31,
    35,
    21,
    7,
    40,
    14,
    14,
    35,
    44,
    50,
    5,
    24,
    61,
    89,
    51,
    16,
    11,
  ]

  const statistics = {
    smallest: numbers[0],
    largest: numbers[0],
    sum: 0,
    sumOfOdd: 0,
    countOfEven: 0,
  }

  for (let index = 0; index < numbers.length; index++) {
    if (statistics.smallest > numbers[index]) {
      statistics.smallest = numbers[index]
    }
    if (statistics.largest < numbers[index]) {
      statistics.largest = numbers[index]
    }
    if (numbers[index] % 2 !== 0) {
      statistics.sumOfOdd = statistics.sumOfOdd + numbers[index]
    }
    if (numbers[index] % 2 === 0) {
      statistics.countOfEven++
    }
    statistics.sum = statistics.sum + numbers[index]
  }
  statistics.average = statistics.sum / numbers.length

  console.log(statistics)
}

document.addEventListener('DOMContentLoaded', main)

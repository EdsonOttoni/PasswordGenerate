// get elements for html
const btn = document.getElementsByClassName('btn')
const view = document.getElementById('view-text')
const copyBtn = document.getElementById('copy')
const lengthEight = document.getElementById('eight')
const lengthSixteen = document.getElementById('sixteen')
const lengthTwentyFour = document.getElementById('twenty-four')
const thirtyTwo = document.getElementById('thirty-two')

// Variables
const upperLetter = 'ABCDEFCHIJKLMNOPQRSTUVWXYZ'
const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '@!?$-+*/=_%#'

// get length
let length = ''
const getLength = () => {
  if (lengthEight.checked) {
    return (length = lengthEight.value)
  }
  if (lengthSixteen.checked) {
    return (length = lengthSixteen.value)
  }
  if (lengthTwentyFour.checked) {
    return (length = lengthTwentyFour.value)
  }
  if (thirtyTwo.checked) {
    return (length = thirtyTwo.value)
  }
}

// maker password

const randomUpperLetter = () => {
  return upperLetter[Math.floor(Math.random() * upperLetter.length)]
}
const randomLowerLetter = () => {
  return lowerLetter[Math.floor(Math.random() * lowerLetter.length)]
}
const randomNumbers = () => {
  return numbers[Math.floor(Math.random() * numbers.length)]
}
const randomSymbols = () => {
  return symbols[Math.floor(Math.random() * symbols.length)]
}

const passwordGenerate = () => {
  let randomResult = ''
  let nr = []
  let characters = []
  let generateR = ''

  for (let i = randomResult.length; i < getLength(); i++) {
    characters = [
      randomUpperLetter(),
      randomLowerLetter(),
      randomNumbers(),
      randomSymbols(),
    ]

    generateR = characters[Math.floor(Math.random() * characters.length)]

    for (let count = 0; count < nr.length; count++) {
      while (nr[count] == generateR) {
        generateR = characters[Math.floor(Math.random() * characters.length)]
      }
    }

    nr[i] = generateR

    randomResult += generateR
  }

  nr = []
  return randomResult
}

// push the password for view

const pushPassword = () => {
  let password = passwordGenerate()
  view.innerHTML = password
}

// copy button

const copyButton = () => {
  navigator.clipboard.writeText(view.innerHTML)
}

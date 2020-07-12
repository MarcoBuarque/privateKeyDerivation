import { isBinary, isHex } from './validation.mjs'

const BINARY_BASE = 2
const DECIMAL_BASE = 10
const HEXA_BASE = 16
const GROUP_OF_BITS = 4
const EXPONENTS = [3, 2, 1, 0] // 2³ 2² 2¹ 2⁰

// Formatação:

export const parseHexNum = hexNum => {
  return hexNum.trim().replace(/^0x/i, '')
}

// Formatação

// Normalização:

export const normalizeBinary = binaryNum => {
  const length = binaryNum.length
  const rest = length % GROUP_OF_BITS 

  if (rest !== 0){
    const bitsToAdd = GROUP_OF_BITS - rest
    return binaryNum.padStart(length + bitsToAdd, '0')
  }

  return binaryNum
}

// Normalização

// Conversão de base:

export const convertHexToDecimal = hexNum => {
  if (typeof hexNum !== 'string') {
    // throw Error('This function accept only string as an valid argument')
    console.log('This function accept only string as an valid argument')
    return 'Not today'
  }

  const parsedNumber = parseHexNum(hexNum)

  if (!isHex(parsedNumber)) {
    // throw Error('This arg is not a valid hexadecimal')
    console.log('This arg is not a valid hexadecimal')
    return 'Not today'
  }

  return String(parseInt(parsedNumber, HEXA_BASE))
}

export const convertDecimalToHex = decimalNum => { // TODO TESTS
  return decimalNum.toString(HEXA_BASE)
}

export const convertHexToBinary = hexNum => {
  if (typeof hexNum !== 'string') {
    // throw Error('This function accept only string as an valid argument')
    console.log('This function accept only string as an valid argument')
    return 'Not today'
  }

  const parsedNumber = parseHexNum(hexNum)

  if (!isHex(parsedNumber)) {
    // throw Error('This arg is not a valid hexadecimal')
    console.log('This arg is not a valid hexadecimal')
    return 'Not today'
  }

  const length = parsedNumber.length
  let result = ''

  for (let stringIndex = 0; stringIndex < length; stringIndex++) {
    let decimalNum = parseInt(parsedNumber[stringIndex], HEXA_BASE)

    EXPONENTS.forEach(exponent => {
      if (decimalNum - BINARY_BASE ** exponent >= 0) {
        result += '1'
        decimalNum = decimalNum - BINARY_BASE ** exponent
      } else {
        result += '0'
      }
    })
  }

  return {
    number: result,
    length: result.length
  }

  // while (result[0] === '0') {
  //   result = result.substr(1)
  // }
}


export const convertBinaryToHex = binaryNum => {
  let strNum = String(binaryNum).trim()

  if (!isBinary(strNum)) {
    // throw Error('This function accept only string as an valid argument')
    console.log('This function accept only binary as an valid argument')
    return 'Not today'
  }

  strNum = normalizeBinary(strNum)

  const length = strNum.length
  let result = ''
  let bit = 0 
  while (bit < length) {
    const bitGroup = strNum.slice(bit, bit + GROUP_OF_BITS)
    let sum = 0

    EXPONENTS.forEach(exponent => {
      const stringIndex = 3 - exponent
      sum += Number(bitGroup[stringIndex] * (BINARY_BASE ** exponent))
    })
  
    result += convertDecimalToHex(sum)
    bit += GROUP_OF_BITS
  }

  return {
    number: result,
    length: result.length
  }
}

export const convertBinaryToBase58 = binaryNum => { // TODO TESTS
  let strNum = String(binaryNum).trim()

  if (!isBinary(strNum)) {
    // throw Error('This function accept only string as an valid argument')
    console.log('This function accept only binary as an valid argument')
    return 'Not today'
  }
  return 'TODO'
}

export const convertBase58ToBinary = num => { // TODO TESTS
  return 'TODO'
}

export const convertHexToBase58 = hexNum => { // TODO TESTS
  // TODO
}

export const convertBase58ToHex = hexNum => { // TODO TESTS
  // TODO
}

// Conversão de base
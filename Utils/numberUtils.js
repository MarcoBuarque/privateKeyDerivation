import { isBinary, isHex } from './validation'

const BINARY_BASE = 2
const DECIMAL_BASE = 10
const HEXA_BASE = 16
const GROUP_OF_BITS = 4
const EXPONENTS = [3, 2, 1, 0] // 2³ 2² 2¹ 2⁰

// Formatação:

export const parseHexNum = hexNum => {
  return String(hexNum).trim().replace(/^0x/i, '')
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
  const parsedNumber = parseHexNum(hexNum)

  return parseInt(parsedNumber, DECIMAL_BASE)
}

export const convertHexToBinary = hexNum => {
  if (typeof hexNum !== 'string') {
    // throw Error('This function accept only string as an valid argument')
    console.log('This function accept only string as an valid argument')
    return 'Not today'
  }

  if (!isHex(hexNum)) {
    // throw Error('This arg is not a valid hexadecimal')
    console.log('This arg is not a valid hexadecimal')
    return 'Not today'
  }

  const parsedNum = parseHexNum(hexNum)
  const length = parsedNum.length
  let result = ''

  for (let stringIndex = 0; stringIndex < length; stringIndex++) {
    let decimalNum = parseInt(parsedNum[stringIndex], HEXA_BASE)

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
  
    result += aux.toString(HEXA_BASE)
    bit += GROUP_OF_BITS
  }

  return {
    number: strNum,
    length: strNum.length
  }
}

export const convertHexToBase58 = hexNum => {
  // TODO
}

export const convertBase58ToHex = hexNum => {
  // TODO
}

// Conversão de base
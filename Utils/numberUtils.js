import { isBinary, isHex } from './validation'

const BINARY_BASE = 2
const DECIMAL_BASE = 10
const HEXA_BASE = 16
const GROUP_OF_BITS = 4

// Formatação:

const parseHexNum = hexNum => {
  return String(hexNum).trim().replace(/^0x/i, '')
}

// Formatação

// Normalização:

const normalizeBinary = binaryNum => {
  const length = binaryNum.length
  const rest = length % 4 

  if (rest !== 0){
    return binaryNum.padStart(length + 4 - rest, '0')
  }
  return binaryNum
}

// Normalização

// Conversão de base:

const convertHexToDecimal = hexNum => {
  const parsedNumber = parseHexNum(hexNum)

  return parseInt(parsedNumber, DECIMAL_BASE)
}

const convertHexToBinary = hexNum => {
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

    for(let x = 3; x >=  0; x--) {
      if (decimalNum - BINARY_BASE ** x >= 0) {
        result += '1'
        decimalNum = decimalNum - BINARY_BASE ** x
      } else {
        result += '0'
      }
    }
  }
  return {
    number: result,
    length: result.length
  }
}



const convertBinaryToHex = binaryNum => {
  let strNum = String(binaryNum).trim()

  // Validate if is binary
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

    for(let exponent = 3; exponent >= 0; exponent--) {
      sum += Number(bitGroup[3 - exponent] * (BINARY_BASE ** exponent))
    }
  
    result += aux.toString(HEXA_BASE)
    bit += 4
  }

  return {
    number: strNum,
    length: strNum.length
  }
}

// Conversão de base
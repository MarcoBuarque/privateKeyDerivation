export const isBinary = binaryNum => {
  return /^[0-1.]+$/.test(binaryNum)
}

export const isHex = hexNum => {
  return /^[0-9A-F]+$/.test(hexNum.toLowerCase())
}

export const isBase58 = num => {
  // TODO
  return true
}

// pk = Private key
export const validateWIF = pk => {
  // TODO
  return true
}

// pk = Private key
export const validate256K1 = pk => {
  // TODO
  return true
}
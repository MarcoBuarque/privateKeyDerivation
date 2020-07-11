export const isBinary = binaryNum => {
  return /^[0-1.]+$/.test(binaryNum)
}

export const isHex = hexNum => {
  return /^[0-9A-F]+$/.test(hexNum.toLowerCase())
}
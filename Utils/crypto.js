import { convertHexToDecimal } from './numberUtils'

const p =  0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F
const a = 0
const b = 7
// const a =  0X0000000000000000000000000000000000000000000000000000000000000000
// const b =  0x0000000000000000000000000000000000000000000000000000000000000007
// const G =  0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB 2DCE28D9 59F2815B 16F81798 483ADA77 26A3C465 5DA4FBFC 0E1108A8 FD17B448 A6855419 9C47D08F FB10D4B8
const Xg = 0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798
const Yg = 0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8
const G = (convertHexToDecimal(Xg), convertHexToDecimal(Yg))
const n =  0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
const h =  01
// Ellipti Curve Euqation: x³ + ax + b
// BTC and ETH 256kI 256-bit
// p is a prime number
// p = 2²⁵⁶ - 2³² - 977
// Fp = (0, .., p - 1)
// G é um ponto predeterminado, a partir do qual os demais pontos serão calculados (Xg, Yg)
// Yg = (Xg + 7)¹/² ]
// n determina o valor maximo que um parametro da key pode receber 
// h é o cofator e tem o valor 1



// Utilizando o padrão 256k1 (BTC e ETH)
// Os tipos de derivação são para Hexa decimal e para Wallet Import Format (WIF)
export function derivateAddressFromPrivateKey (gPoint, pkInHex, type = 'HEX') {
  if (gPoint === 0 || pkInHex >= n) {
    return console.log('Something is wrong, check the params')
  }
}
  

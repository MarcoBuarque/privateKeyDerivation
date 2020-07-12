import * as Utils from './../numberUtils.mjs'
// TODO Implementar lib de testes Unitários


console.log('\n\nconvertBinaryToHex:\n')
console.log('num: 01011011110010', '\nresult: ', Utils.convertBinaryToHex('01011011110010').number , '\nexpected: 16f2',
'pass: ', Utils.convertBinaryToHex('01011011110010').number === '16f2' ,'\n')
console.log('num: 1011001000011010', '\nresult: ', Utils.convertBinaryToHex('1011001000011010').number, '\nexpected: b21a',
'pass: ', Utils.convertBinaryToHex('1011001000011010').number === 'b21a' ,'\n')
console.log('num: 101001102000001100', '\nresult: ', Utils.convertBinaryToHex('101001102000001100'), '\nexpected: Not today',
'pass: ', Utils.convertBinaryToHex('101001102000001100').number === undefined, '\n')
console.log('Finish convertBinaryToHex\n')

console.log('\n\n convertHexToBinary:\n')
console.log('num: 16f2', '\nresult: ', Utils.convertHexToBinary('16f2').number, '\nexpected: 0001011011110010 ',
'pass: ', Utils.convertHexToBinary('16f2').number === '0001011011110010','\n')
console.log('num: b21a', '\nresult: ', Utils.convertHexToBinary('b21a').number, '\nexpected: 1011001000011010',
'pass: ', Utils.convertHexToBinary('b21a').number === '1011001000011010','\n')
console.log('num: XA1Q', '\nresult: ', Utils.convertHexToBinary('XA1Q'), '\nexpected: Not today',
'pass: ', Utils.convertHexToBinary('XA1Q').number === undefined, '\n')
console.log('Finish convertHexToBinary\n\n')

console.log('\n\n convertHexToDecimal:\n')
console.log('num: 16f2', '\nresult: ', Utils.convertHexToDecimal('16f2'), '\nexpected: 5874 ',
'pass: ', Utils.convertHexToDecimal('16f2') === '5874','\n')
console.log('num: b21a', '\nresult: ', Utils.convertHexToDecimal('b21a'), '\nexpected: 45594',
'pass: ', Utils.convertHexToDecimal('b21a') === '45594','\n')
console.log('num: XA1Q', '\nresult: ', Utils.convertHexToDecimal('XA1Q'), '\nexpected: Not today',
'pass: ', Utils.convertHexToDecimal('XA1Q') === 'Not today', '\n')
console.log('Finish convertHexToDecimal\n\n')
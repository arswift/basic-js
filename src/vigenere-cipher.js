const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor (direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase()
    let result = '';
    let fullKey = key.toUpperCase();
    for (let i = key.length; i < message.length; i++) {
      let index = i % key.length;
      fullKey += key[index].toUpperCase();
    }
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i])) {
        result += message[i];
      } else {
        let shift = alphabet.indexOf(message[i]); // смещение
        let start = alphabet.indexOf(fullKey[j]); // начальна координата
        let index = (start + shift) % 26;
        result += alphabet[index];
        j++;
      }
    }
    return this.direct ? result : result.split("").reverse().join("");
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    encryptedMessage = encryptedMessage.toUpperCase()
    let result = '';
    let fullKey = key.toUpperCase();
    for (let i = key.length; i < encryptedMessage.length; i++) {
      let index = i % key.length;
      fullKey += key[index].toUpperCase();
    }
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let j = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!alphabet.includes(encryptedMessage[i])) {
        result += encryptedMessage[i];
      } else {
        let shift = alphabet.indexOf(encryptedMessage[i]); // смещение
        let start = alphabet.indexOf(fullKey[j]); // начальна координата
        let index = (shift - start) % 26;
        if (index < 0) index += 26; 
        result += alphabet[index];
        j++;
      }
    }
    return this.direct ? result : result.split("").reverse().join("");
  }
}


module.exports = {
  VigenereCipheringMachine
};

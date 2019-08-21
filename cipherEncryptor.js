// Time = O(n) | space = O(1)
let text = 'emran';
let cheaf = 52;
cheaf = cheaf % 26;
text = text.split('');
for (let i = 0; i < text.length; i++) {
  let charWouldBeCode = text[i].charCodeAt(0) + cheaf;
  if (charWouldBeCode > 122) {
    charWouldBeCode = 96 + (charWouldBeCode % 122);
  }
  text[i] = String.fromCharCode(charWouldBeCode);
}
text = text.join('');

console.log(text);

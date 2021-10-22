const reverseWord = value => {
  let text = '';

  for (let i = value.length; i > 0; i--) {
    text += value.charAt(i);
  }

  return text;
};

console.log(reverseWord('Kasur Rusak')); // kasuR rusaK
console.log(reverseWord('Glints Academy')); // ymedacA stnilG
console.log(reverseWord('Haji Ijah')); // hajI ijaH
console.log(reverseWord('racecar')); // racecar
console.log(reverseWord('I am RN Student')); // tnedutS NR ma I

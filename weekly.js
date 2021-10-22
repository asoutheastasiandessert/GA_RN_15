const multiple = (num1, num2) => {
  return num1 * num2;
};

let num1 = 12;
let num2 = 4;
let result = multiple(num1, num2);
console.log(result); // 48

const reverseWord = text => {
  let newText = '';
  for (let i = text.length; i >= 0; i -= 1) {
    newText += text.charAt(i);
  }
  return newText;
};

console.log(reverseWord('Kasur Rusak')); // kasuR rusaK
console.log(reverseWord('Glints Academy')); // ymedacA stnilG
console.log(reverseWord('Haji Ijah')); // hajI ijaH
console.log(reverseWord('racecar')); // racecar
console.log(reverseWord('I am RN Student')); // tnedutS NR ma I

function ridingBus(arrPassenger) {
  let route = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  console.log(arrPassenger[0]);
  return {};
}

console.log(
  ridingBus([
    ['Lita', 'B', 'F'],
    ['Icha', 'A', 'B'],
  ]),
);
// [
//   // output
//   ({passenger: 'Lita', from: 'B', to: 'F', pay: 8000},
//   {passenger: 'Icha', from: 'A', to: 'B', pay: 2000})
// ];

console.log(ridingBus([]));
// output
// [];

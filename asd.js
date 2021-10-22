function ridingBus(arrPassenger) {
  let route = ['A', 'B', 'C', 'D', 'E', 'F'];
  let newPassenger = [];

  for (let i = 0; i < arrPassenger.length; i++) {
    let passenger, from, to;
    passenger = arrPassenger[i][0];
    from = arrPassenger[i][1];
    to = arrPassenger[i][2];

    let convertFromToNumber, convertToToNumber;
    for (let j = 0; j <= route.length; j++) {
      if (route[j] == from) {
        //"A" == "B" // literasi = 0 = j
        //"B" == "B" // literasi = 1 = j
        convertFromToNumber = j;
      }

      if (route[j] == to) {
        // "A" == "F" // literasi = 0 = j
        // ...
        // "F" == "F" // literasi = 5 = j
        convertToToNumber = j;
      }
    }

    // (to - from) * 2000
    // (F - B) * 2000
    // (5 - 1) * 2000

    const Customer = {
      passenger: passenger,
      from: from,
      to: to,
      pay: (convertToToNumber - convertFromToNumber) * 2000,
    };

    newPassenger.push(Customer);
  }

  // return newPassenger;

  // return [
  //   {passenger: 'Lita', from: 'B', to: 'F', pay: 8000},
  //   {passenger: 'Icha', from: 'A', to: 'B', pay: 2000},
  // ];

  // const Lita = {passenger: 'Lita', from: 'B', to: 'F', pay: 8000};

  // newPassenger.push(Lita);

  return newPassenger;
}

console.log(
  ridingBus([
    ['Lita', 'B', 'F'],
    ['Icha', 'A', 'B'],
  ]),
);
// output
//   [ { passenger: 'Lita', from: 'B', to: 'F', pay: 8000 },
//     { passenger: 'Icha', from: 'A', to: 'B', pay: 2000 } ]

// console.log(ridingBus([]));
// output
//   []

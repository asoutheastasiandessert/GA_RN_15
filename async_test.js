function kalkulasiKelilingKubusMenggunakanServiceLuar(nilai){
    return new Promise((resolve, reject) => {
        resolve(nilai + nilai + nilai)
    })
}

var nilai = 5

kalkulasiKelilingKubusMenggunakanServiceLuar(nilai).then((kelilingKubus) => {

    console.log('Proses ini di line 11 tetapi akan di proses setelah log di line 14')
    console.log(`Keliling kubus adalah : ${kelilingKubus}`)
})

console.log('Proses ini di line 14, walaupun dia di line paling bawah, tapi karna asynchronous, iya akan jalan lebih awal dari line 11')

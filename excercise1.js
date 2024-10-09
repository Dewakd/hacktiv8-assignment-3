// Nama : Dewa Kadek Arie Yudha

function isArithmeticProgression(arr) {
    const selisih = arr[1] - arr[0]; //selisih = 1
    const n = arr.length;

    // Ignore kode yang dicomment ya kak (hanya untuk ngejelasin ke diri sendiri kalau lupa atau kalau ada orang yang minta diajarin :D)

    console.log(`Perulangan akan dilakukan sebanyak : ${n} kali`)
    console.log("Nilai Selisih :", selisih)
    for(let i = 1; i < n - 1 ; i++){
        

        // let apakahSamaDengan = false;
        // if(arr[i + 1] - arr[i] !== selisih){
        //     apakahSamaDengan = false;
        // }else{
        //     apakahSamaDengan = true;
        // }
        // console.log(`================== PERULANGAN KE ${i} =====================`)
        // console.log("nilai index ke", arr.indexOf(arr[i+1]) ,"dikurangi nilai index ke", arr.indexOf(arr[i]), `|| ${arr[i+1]} - ${arr[1]} = ${arr[i+1] - arr[i]} `)

        // console.log("Apakah nilai perulangan ke", i, "sama dengan selisih ?")
        // console.log(arr[i + 1] ,"Dikurang", arr[i], '=', arr[i + 1] - arr[i],`Jawabannya ${apakahSamaDengan ? "Benar karna sama dengan selisih angka" : "Salah karna tidak sama dengan selisih angka"}`)
        // console.log("================== PERULANGAN SELESAI =====================")
        // console.log('')
        if(arr[i + 1] - arr[i] !== selisih){
            return false;
        }
    }
    return true;
}

const number1 = [1,2,3,4,5];
// const number2 = [2,4,6,12,24];
// const number3 = [2,4,6,8];
// const number4 = [2,6,18,54];
// const number5 = [1,2,3,4,7];

// console.log(isArithmeticProgression(number1)) //true
// console.log(isArithmeticProgression(number2)) //false
// console.log(isArithmeticProgression(number3)) //true
// console.log(isArithmeticProgression(number4)) //false
// console.log(isArithmeticProgression(number5)) //false

const isArithmetic = isArithmeticProgression(number1);

console.log(
  "Jawaban : ",
  isArithmetic,
  `${isArithmetic ? "Karena semua pengurangan sesuai dengan selisih antar angka yang di input" : "Karena ada salah satu atau lebih pengurangan yang tidak sesuai dengan selisih antar angka yang di input"}`
);

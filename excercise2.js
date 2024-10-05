function threeStepsAB(text) {
    console.log('text :', text)
    for (let i = 0; i < text.length - 4; i++) {
        console.log('Perulangan ke', i+1, text[i] === 'a' || text[i] === 'b' ? `Mendapatkan huruf ${text[i] === 'a' ? 'a sekarang kita akan mencari huruf b' : 'b sekarang kita akan mencari huruf a'}` : `Mendapatkan huruf ${text[i]}, bukanlah a / b`)
        
      if ((text[i] === 'a' && text[i + 4] === 'b') || (text[i] === 'b' && text[i + 4] === 'a')) {
        console.log(`mendapatkan huruf ${text[i + 4]} dalam pencaharian 3 karakter setelah a`)
        return console.log(true, `text "${text}" mendapatkan huruf ${text[i]} dan ${text[i+4]} dengan jarak 3 karakter`);
      }
    }
    console.log(`Perulangan dihentikan karena posibilitas mendapatkan a / b dengan perbedaan 3 karakter sudah tidak ada`)
    return console.log(false, `text ${text} tidak terdapat nilai a / b yang berbeda 3 karakter`);
  }
  
  // TEST CASES
  // console.log(threeStepsAB('lane borrowed')); // true
  // console.log(threeStepsAB('i am sick')); // false
  console.log(threeStepsAB('you are boring')); // true
//   console.log(threeStepsAB('barbarian')); // true
  // console.log(threeStepsAB('bacon and meat')); // false
    //  console.log(threeStepsAB('bsssa'))
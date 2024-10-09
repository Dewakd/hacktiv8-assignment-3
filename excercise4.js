// Nama : Dewa Kadek Arie Yudha

function arrSum(arr){
    let result = []; //untuk menyimpan sub array dan penjumlahan subarray (arr2, maxSum)
    let arr2 = []; //untuk menyimpan sub array
    let totalSum = 0; //untuk menjumlahkan sub array
    let maxSum = 0; //untuk menyimpan penjumlahan tertinggi

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            arr2 = arr.slice(i, j + 1);  // membuat sub array secara dinamik dengan menggunakan variable yang digunakan untuk looping
            for(let k = 0; k < arr2.length; k++){ //looping untuk menjumlahkan sub array
                totalSum += arr2[k];
            }
            if(totalSum > maxSum) { //logika jika totalSum > maxSum maka maxSum akan menyimpan nilai tertinggi sementara hingga ada yang lebih besar dari pada current maxSum (jika tidak ada yang lebih besar dari current maxSum maka angka yang disimpan sementara itu akan menjadi nilai terbesar)
                maxSum = totalSum;
                result = [arr2, maxSum] //memasukan sub array yang menghasilkan nilai yang paling tinggi
            }
            
            totalSum = 0; //reset total sum untuk perulangan selanjutnya
        }
    }
    return result
}

console.log(arrSum([-2,-3,4,-1,-2,1,5,-3]));

// const ar = [1, 2, 3, 4, 5];
// const ar2 = ar.slice(1, 4);
// console.log(ar2);

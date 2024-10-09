// Nama : Dewa Kadek Arie Yudha

function sumArray(arr,int){
    let result = []
    console.log(`Sekarang kita akan mencari angka ${int}`)
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            console.log(`${arr[i]} ditambah ${arr[j]} = ${arr[i] + arr[j] === int ? `${arr[i] + arr[j]} || angka ${int} ditemukan` : arr[i] + arr[j] }`)
            if(arr[i] + arr[j] === int){
                result.push([arr[i], arr[j]])
            }
        }
    }
    return result
}

// console.log(sumArray([2,1,4,3] , 5)); //output [[2,3], [1,4]]
console.log(sumArray([1,8,10,1] , 9)); //output [[1,10], [8,3]]
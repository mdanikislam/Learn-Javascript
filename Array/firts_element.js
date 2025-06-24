// sol - 1 
let first = function (array, n){
    if(array == null){
        return void 0

    }
    else if(n ==null){
        return array [0]
    }
    else if(n<0){
        return [];
    }
    return array.slice(0,n);
}

console.log(first([7,8,9,0]));
console.log(first([], 7));




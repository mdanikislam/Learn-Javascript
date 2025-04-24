// find the max number in an array 
const height = [10,20,30,40,50,60,70,80,90,99];
function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num>max){
            max = num;
        }
    }
    return max;
}
const max = getMax(height);
console.log(max);

// find the minimum number in an array 
const wight = [10,256,14,25,45,78,11,9,54,68,5885];
function findMin(numbers){
let min= numbers[0]
    for(const num of numbers){
        if(num<min){
            min=num;
        }
    }
    return min;
}
console.log(findMin(wight));


 


/* 
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

const heights2 = [167, 190, 120, 165, 137];
function lowestNum(array){
       let unique_Number=heights2[0];
    for(const number of array){
        if(unique_Number>number){
            unique_Number=number;
        }
    }
    return unique_Number;
}
console.log(lowestNum(heights2));



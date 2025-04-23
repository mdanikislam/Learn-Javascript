/* 
Write a function to count the number of vowels in a string.
*/
function findVowel(str){
    let count  = 0;
    const vowel = 'aeiouAEIOU';
    for(const char of str){
        if(vowel.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(findVowel('helloworld'));
console.log(findVowel('HELLOWORLD'));



function findLword(str){
    const words = str.split(' ');
    let longest = '';
    for(const char of words){
        if(char.length>longest.length){
            longest = char;
        }
    }
    return longest;
}
const sentence = 'Hello my name is Anik-Islam';
console.log(findLword(sentence));


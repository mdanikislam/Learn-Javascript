/* 
Truthy - 
1. true
2. positive/Negetive integer
3. String
4. empty string

Falsy - 
1. '' String
2. 0
3. false
4. null
*/

const a = 0;
if (a) {
  console.log("truthy", a);
} else {
  console.log("falsy", a);
}

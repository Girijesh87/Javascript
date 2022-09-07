function rot13(str) {
let answer="";

for (let i=0; i<str.length; i++) {
let asciiNumber = str[i].charCodeAt();

if (asciiNumber >= 65 && asciiNumber <= 77){
    answer +=String.fromCharCode(asciiNumber +13);
      }else if (asciiNumber >= 78 && asciiNumber <=90){
          answer += String.fromCharCode(asciiNumber-13);
              } else {
                      answer +=str[i];
        }
}
return answer;
}

rot13("SERR PBQR PNZC");

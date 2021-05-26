//const mail = ["string1", "string2", "string3", "string4"];


//for (let i = 0; i < mail.length; i++ ) {
//    console.log(mail[i]); 
//}
//let j = 0;
//while (j < mail.length); {
    //console.log(mail[j]);
   // j += 1;
//}
function writeCards(names, event) {
    let messages = [];
    
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        }
        return messages; 
}
function countDown(positiveNumber) {
    let number = [];

    while (positiveNumber >= 0) {
      console.log(positiveNumber);
      positiveNumber--;
    }
    
}
    


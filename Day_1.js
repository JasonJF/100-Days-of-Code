'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowelReg = /[aeiou]/; //regex to check for vowels
    var consonants = [];
    
    for(let i = 0; i < s.length; i++){  //iterate through string
        if(vowelReg.test(s[i])){        //test character to see if it conforms to regex
            console.log(s[i]);
        }
        else{
            consonants.push(s[i]);      //else add character to the consonants array
        }
       
    }
    consonants.forEach(number => console.log(number));  //lastly log through each item in consonants and print
    
}

//What I learnt today
/*In todays challenge I learnt that when you want to use .test method for a regex, you have to use regex.test(someText)
and not someText.test(regex).
I also learned that .forEach method requires some function, so to print everything in an array one could use
.forEach(item => some function on item)
 */
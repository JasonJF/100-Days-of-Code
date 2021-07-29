strict';

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
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    
    try{
        var stringArr = s.split('');
        stringArr.reverse();
        console.log(stringArr.join(''));
    }
    catch(e){
        console.log(e.message);     //error handling
        console.log(s);
    }
     
}
/**Here I learnt about error handling, you can use try / catch to catch errors
 * The error message can be with catch(e) and printed with console.log(e.message)
 */
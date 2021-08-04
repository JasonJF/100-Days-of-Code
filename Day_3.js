process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    // Declare second integer, double, and String variables.
    var i = 4;
    var d = '4.0';
    var s = 'HackerRank ';
    // Read and save an integer, double, and String to your variables.
    i = i + parseInt(readLine());
    // console.log(d);
    var x = parseFloat(readLine()).toFixed(1)
    // console.log(parseFloat(d) + parseFloat(x))
    // d = parseFloat(d) + parseFloat(readLine()).toFixed(1);
    s = s + readLine();
    
    // Print the sum of both integer variables on a new line.
    console.log(i);
    // Print the sum of the double variables on a new line.
    console.log((parseFloat(d) + parseFloat(x)).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s);

}
/**Today I learned that to read a value as a floating point number in JavaScript you must use 'parseFloat'
 * To get your result to a certain number of decimal places, you need to use '.toFixed(x)',
 * where x is the number of decimal places. 
 */
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const timeParts = s.split (":");
    let hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const seconds = parseInt(timeParts[2].substring(0, 2), 10);
    const period = timeParts[2].substring(2);

    // Verifica si es AM o PM y ajusta las horas en consecuencia
    if (period === "PM" && hours !== 12) {
        hours += 12;
    } else if (period === "AM" && hours === 12) {
        hours = 0;
    }

    // Formatea las horas, minutos y segundos en formato de 24 horas
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return formattedTime;
}
const twelveHourTime = "07:45:32PM";
const twentyFourHourTime = timeConversion(twelveHourTime);
console.log(twentyFourHourTime); // Output: "19:45:32"

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
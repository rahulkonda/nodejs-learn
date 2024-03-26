import { createReadStream, createWriteStream } from 'node:fs';
import { createInterface } from 'node:readline';
const reader = createReadStream('./task3/samp.txt');
const csvFilePath = './task3/books.csv';
const reader1 = createReadStream('./task3/books.csv');
const writer = createWriteStream('./task3/out.txt');
const rl = createInterface({
    input: reader
})
rl.on('line',lineData=>{
    console.log(lineData,':EOL');
    writer.write(lineData + '\n');
})
// reader.on('data',ch=>{
//     console.log(ch.toString(),'\n','----','\n')
// })
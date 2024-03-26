import csv from 'csvtojson';
import fs from 'fs';

const csvFilePath = './task3/books.csv';
const txtFilePath = './task3/out.txt';

const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream(txtFilePath);

const csvToJson = csv({
    noheader: false,
    // ignoreColumns: /(Amount|amount)/,
    downstreamFormat: 'line'
});

readStream
    .pipe(csvToJson)
    .on('data', (jsonLine) => { 
        writeStream.write(jsonLine + '\n');
    })
    .on('end', () => { 
        writeStream.end();
        console.log('done');
    });
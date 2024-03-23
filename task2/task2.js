import { exec } from 'child_process';
import * as fs from 'fs';

let logFile = './activityMonitor.log';

async function getMostIntensiveProcess() {
    let cmd = '';
    switch (process.platform) {
        case 'win32':
            cmd = `powershell "Get-Process | Sort-Object CPU -Descending | Select-Object -Property Name, CPU, WorkingSet -First 1 | ForEach-Object { $_.Name + ' ' + $_.CPU + ' ' + $_.WorkingSet }"`;
            break;
        case 'darwin':
            cmd = 'ps -A -o %cpu,%mem,comm | sort -nr | head -n 1';
            break;
        case 'linux':
            cmd = 'ps -A -o %cpu,%mem,comm | sort -nr | head -n 1';
            break;
        default:
            console.error('Unsupported platform');
            process.exit(1);
    }

    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout) => {
            if (error) return reject(error);
            return resolve(stdout);
        });
    });
}

// Print Process info every 100ms
setInterval(async () => {
    try {
        const data = await getMostIntensiveProcess();
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(data.toString().trim());
    } catch (error) {
        console.error('Error getting the most intensive process', error);
    }
}, 100);

// Log Process info every minute
setInterval(async () => {
    try {
        const data = await getMostIntensiveProcess();
        fs.appendFileSync(logFile, `${Date.now()} : ${data}\n`, 'utf8');
    } catch (error) {
        console.error('Error writing to log file', error);
    }
}, 60000);ˀ	
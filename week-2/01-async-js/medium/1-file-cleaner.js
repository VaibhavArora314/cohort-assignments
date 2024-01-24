const fs = require('fs')

fs.readFile('1-input.txt', 'utf-8', (err,data) => {
    if (err) console.log(err);
    else {
        console.log("Data in input file:", data);

        const cleanedData = data.trim().replace(/\s+/g, ' ');
        console.log("Data after cleaning:", cleanedData);

        fs.writeFile('1-output.txt', cleanedData, 'utf-8', (err) => {
            if (err) console.log(err);
            else console.log("Successfully written in file!");
        })
    }
})
const fs = require('fs');
const path = require('path');

function generateCSS(css, html, output) {
    // Ensure the directory exists
    if (!fs.existsSync(output)){
        fs.mkdirSync(output, { recursive: true });
    }

    // Define the full path to the main.css file
    const filePath = path.join(output, 'main.css');

    // Define the content to be written to the file
    const fileContent = '/* Add your CSS styles here */';

    // Write the content to the file
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            return console.error(`A problem occurred while creating the file: ${err.message}`);
        }
    });
}
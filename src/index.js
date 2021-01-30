const path = require("path")
const fs = require("fs");

const homedir = (process.platform === 'win32') ? process.env.HOMEPATH : process.env.HOME;
const workPath = path.resolve(homedir, "./Desktop/pito")
const textFilePath = path.resolve(workPath, "./pito.txt")

if (!fs.existsSync(textFilePath)) {
    fs.mkdirSync(workPath, { recursive: true })
    fs.writeFileSync(textFilePath, "Fermin chupa pollas xd y Gabriel tambein :D")
}

if (process.argv[2]) {
    fs.writeFileSync(textFilePath, process.argv[2])
}

console.log(fs.readFileSync(textFilePath, { encoding: "utf-8" }))


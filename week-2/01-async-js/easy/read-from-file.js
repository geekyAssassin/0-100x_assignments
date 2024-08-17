const fs = require("node:fs/promises");
const filePath = "h/home/geeky-tech-tinkerer/Bhavani/Developement/0-100/0-100x_assignments/week-2/01-async-js/easy/a.txt";
function showContents() {
  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    console.log(data);
  });
}

const contentOfFile = showContents();

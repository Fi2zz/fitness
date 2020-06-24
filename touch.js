const fs = require("fs");
const date = new Date();
const t = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
const script = `
window.onload =function(){
    document.getElementById('time').innerText = "Dist at ${t}";
}
`;
fs.writeFileSync("./app.js", script.trim(), { encoding: "utf-8" });

console.log("Dist At", t);

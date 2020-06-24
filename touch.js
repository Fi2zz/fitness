const fs = require("fs");
const date = new Date();
const { execSync } = require("child_process");
const t = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
const script = `
window.onload =function(){
    document.getElementById('time').innerText = "Dist at ${t}";
}
`;
fs.writeFile("./app.js", script.trim(), { encoding: "utf-8" }, (err) => {
  if (err) return;
  execSync('git add . && git commit -m "update"');
});

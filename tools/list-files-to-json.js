// Run like:
//  node list-files-and-sizes.js <dir> [<dir2 ...]

// This script:
// * recursively walks the file tree to get a list of files in order,
// and writes the results to a JSON file

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
let i = 0;

function listFilesSync(fullDirPath, directory) {
  let fileList = [];

  for (let file of fs.readdirSync(fullDirPath)) {
    // fs.readdirSync(fullDirPath).forEach((file) => {
    const fullPath = path.join(fullDirPath, file);

    if (fs.lstatSync(fullPath).isDirectory()) {
      fileList = fileList.concat(listFilesSync(fullPath, directory));
    } else {
      console.log(++i);
      let item = {};

      item.name = path.parse(fullPath).name;

      if (
        item.name === "forest" ||
        item.name === "home" ||
        item.name === `${path.basename(directory)}-items`
      )
        continue;

      let string = fullPath;
      let hash = crypto.createHash("md5").update(string).digest("hex");
      item.id = hash;

      item.type = path.basename(directory);
      item.category = path.basename(path.dirname(fullPath));
      item.path = fullPath
        .substring(fullPath.indexOf(directory) - 1)
        .replace("", "");

      fileList.push(item);
    }
  }
  return fileList;
}

const dirs = process.argv.slice(2);

dirs.forEach((directory) => {
  const fullDirPath = path.resolve(directory);

  console.log(`Processing dir '${fullDirPath}'...`);
  const fullFileList = listFilesSync(fullDirPath, directory);

  console.log(`find ${fullFileList.length} items`);

  const outFile = `${fullDirPath}/${path.basename(directory)}-items.json`;

  fs.writeFileSync(outFile, JSON.stringify(fullFileList, null, 2));
  console.log(`Wrote file ${outFile}`);
});

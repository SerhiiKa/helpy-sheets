// Run like:
//  node list-files-and-sizes.js <dir> [<dir2 ...]

// This script:
// * recursively walks the file tree to get a list of files in order,
// and writes the results to a JSON file

const fs = require("fs");
const path = require("path");
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
      item.type = path.basename(directory);
      item.name = path.parse(fullPath).name;
      if (item.name === "forest" || item.name === "home") continue;
      item.category = path.basename(path.dirname(fullPath));
      item.path = fullPath
        .substring(fullPath.indexOf(directory))
        .replace("src", "../src");

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

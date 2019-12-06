var fs = require("fs");
var path = require("path");
const Program = require("./model/program");

filePath = path.join(__dirname, "metadata_trunc.csv");

const programs = [];
const programByName = {};

fs.readFile(filePath, "utf8", (err, contents) => {
  const programCsvLines = contents.split(/\r?\n/);

  // id,mid,title,genre,subgenre,broadcaster,duration,description,subtitles,translation,interesse_channels,keywords,real_names
  for (let i = 1; i < programCsvLines.length; i++) {
    let csvLine = programCsvLines[i];
    let programData = csvLine.split(",");

    let program = new Program(
      programData[2],
      programData[3],
      programData[1],
      programData[7],
      programData[10]
    );
    programByName[program.title] = program;
  }

  for (program in programByName) {
    programs.push(programByName[program]);
  }
  JSON.stringify(programs);
  fs.writeFile("myjsonfile.json", JSON.stringify(programs), "utf8", () => {});
});

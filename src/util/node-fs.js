const path = require("path");
const mkdirp = require("mkdirp");
const fs = require("fs");

exports.createDefaultDirs = ({ store, reporter }, { contentPath = "docs" }) => {
  const { program } = store.getState();
  const contentDir = path.join(program.directory, contentPath);

  const dirs = [contentDir];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};

exports.copyDefaultFiles = ({ store, reporter }, { contentPath = "docs" }) => {
  const { program } = store.getState();
  const contentDir = path.join(program.directory, contentPath);

  if (fs.existsSync(`${contentDir}/navigation.yaml`)) {
    return;
  }

  const files = [
    "end.md",
    "expandable.md",
    "index.md",
    "level-1.md",
    "level-2.md",
    "level-2b.md",
    "level-3.md",
    "navigation.yaml",
    "doit.png"
  ];

  files.forEach(file => {
    if (!fs.existsSync(`${contentDir}/${file}`)) {
      fs.copyFile(
        `${__dirname}/../example/${file}`,
        `${contentDir}/${file}`,
        err => {
          if (err) throw err;
        }
      );
      reporter.log(`copied ${file} from examples`);
    }
  });
};

exports.initDocsFs = (props, options) => {
  this.createDefaultDirs(props, options);
  this.copyDefaultFiles(props, options);
};

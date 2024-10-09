const core = require('@actions/core');
const fs = require("fs/promises");
const github = require('@actions/github');

const checklistPath = core.getInput('checklist_path')

const checklistContent = await fs.readFile(checklistPath, "utf8");

console.log(checklistContent);

console.log('we made it!');
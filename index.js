const core = require('@actions/core');
const fs = require("fs/promises");
const github = require('@actions/github');

const checklistPath = core.getInput('checklist_path')

(async () => {
    try {

        const checklistContent = await fs.readFile(checklistPath, "utf8");

    } catch (error) {
        console.log(error.message);
    }
})();

console.log(checklistContent);

console.log('we made it!');
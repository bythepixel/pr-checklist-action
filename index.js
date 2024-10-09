const core = require('@actions/core');
const fs = require("fs/promises");
const github = require('@actions/github');

const checklistPath = core.getInput('checklist_path');
const repoToken = core.getInput('repo_token');
const octokit = github.getOctokit(repoToken);

(async () => {
    try {
        const checklistContent = await fs.readFile(checklistPath, "utf8");
        console.log(github.context);
    } catch (error) {
        console.log(error.message);
    }
})();
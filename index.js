const core = require('@actions/core');
const fs = require("fs/promises");
const github = require('@actions/github');

const checklistPath = core.getInput('checklist_path');
const repositoryToken = core.getInput('repository_token');
const repositoryOwner = core.getInput('repository_owner');
const repositoryName = core.getInput('repository_name');

console.log('owner', repositoryOwner);
console.log('name', repositoryName);

const octokit = github.getOctokit(repositoryToken);

(async () => {
    try {
        const checklistContent = await fs.readFile(checklistPath, "utf8");
        octokit.rest.issues.createComment({
            repositoryOwner,
            repositoryName,
            issue_number: 1,// github.context.pull_request.number,
            checklistContent,
        });
        console.log(github.context);
    } catch (error) {
        console.log(error.message);
    }
})();
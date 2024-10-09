const core = require('@actions/core');
const fs = require("fs/promises");
const github = require('@actions/github');

const checklistPath = core.getInput('checklist_path');
const repositoryToken = core.getInput('repository_token');
const repositoryOwner = core.getInput('repository_owner');
const repositoryName = core.getInput('repository_name');



const octokit = github.getOctokit(repositoryToken);

(async () => {
    try {

        console.log('owner', repositoryOwner);
        console.log('name', repositoryName);
        
        const checklistContent = await fs.readFile(checklistPath, "utf8");
        octokit.rest.issues.createComment({
            issue_number: 1,// github.context.pull_request.number,
            repositoryOwner,
            repositoryName,
            checklistContent,
        });
        console.log(github.context);
    } catch (error) {
        console.log(error.message);
    }
})();
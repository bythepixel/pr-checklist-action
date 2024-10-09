const core = require('@actions/core');
const fs = require("fs/promises");
const github = require('@actions/github');

const checklistPath = core.getInput('checklist_path');
const githubToken = core.getInput('github_token');

const octokit = github.getOctokit(githubToken);

(async () => {
    try {
        const checklistContent = await fs.readFile(checklistPath, "utf8");
        console.o
        octokit.rest.issues.createComment({
            issue_number: github.context.number,
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            body: checklistContent,
        });
    } catch (error) {
        console.log(error.message);
    }
})();
# PR Checklist Action
Quickly add a checklist to a pull request! 

Create a checklist in markdown and place it under your .github folder with the name `checklist.md`

Create a new workflow that is triggered whenever a pull request is created:

```yaml
on:
  pull_request:
    types: [opened]

jobs:
  test:
    runs-on: ubuntu-22.04
    
    permissions:
      pull-requests: write
    
    steps:
      - name: Check out repo
        uses: actions/checkout@v4
      - name: Add checklist to PR that was opened
        uses: bythepixel/pr-checklist-action
```
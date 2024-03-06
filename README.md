# playwright-typescript

### Pre-Requisite : 
 
NodeJS 
npm

### playwright installation : 
Install this in project by command : 

        npm init playwright@latest


Runs the end-to-end tests.
        npx playwright test

Starts the interactive UI mode.
        npx playwright test --ui

Runs the tests only on Desktop Chrome.
        npx playwright test --project=chromium

Runs the tests in a specific file.
        npx playwright test example

Runs the tests in debug mode.
        npx playwright test --debug

Auto generate tests with Codegen.
        npx playwright codegen


We suggest that you begin by typing:

        npx playwright test


Commands to be executed:
    
        npm install playwright --save-dev

        npm install @playwright/test --save-dev

        npm install typescript --save-dev

        npx tsc --init

For running test in head mode ui : 
        npx playwright test --headed 

To open last HTML report run:
        npx playwright show-report        
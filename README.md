# Introduction

This is a demo to introduce Angular 2 Component design by building a List View of Github commits.


![Screenshot](https://raw.githubusercontent.com/ghsyeung/ng2-component-intro/master/screenshot/screenshot.png)

This project uses [mgechev/angular2-seed](https://github.com/mgechev/angular2-seed) as seed. 
I highly recommend you to use it as seed of your project.

## How to start
**Note** project requires node v4.x.x or higher and npm 2.14.7.

## Install the Environment
Once you cloned the repository, run 

```bash
npm install 
```

to install all the dependencies.

## Running the dev server
```bash
npm start -- --scss
```

## Demo - Listing Github commits of angular/angular

You can see the code in `src/client/app/+listCommits`.

# TODO

- [ ] Create 3 separate exercises
  - [ ] Add a ListItem (`@Component(), @Input()`)
  - [ ] Show all available items in ListView (`*ngFor`)
  - [ ] Add a "Load More" button (`@Output()`)
- [ ] Add protractor e2e tests



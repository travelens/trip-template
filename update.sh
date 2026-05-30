#!/bin/sh

cp -a ../trip-template/{.github,.vscode,.gitignore,.prettierignore,*config*,LICENSE,update.sh} .
cp -a ../trip-template/src/{pages,content.config.ts} src
rm prettier.config.cjs
node -e "
  const fs = require('fs');
  const template = JSON.parse(fs.readFileSync('../trip-template/package.json', 'utf8'));
  const target = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  template.name = target.name;
  template.description = target.description;
  fs.writeFileSync('package.json', JSON.stringify(template, null, 2) + '\n');
"

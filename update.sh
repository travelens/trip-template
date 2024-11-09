#!/bin/sh

cp -a ../trip-template/{.github,.vscode,.gitignore,.prettierignore,*config*,LICENSE} .
cp -a ../trip-template/src/{components,layouts,pages,env.d.ts} src
rm .eslintrc

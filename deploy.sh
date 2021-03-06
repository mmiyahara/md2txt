#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cp -rp ./sitemap.xml dist/

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:mmiyahara/md2txt.git master:gh-pages

cd -

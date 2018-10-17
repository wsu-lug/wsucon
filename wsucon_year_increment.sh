#!/bin/bash
# AUTHOR Charlie Hanacek
# DESC This script updates the roman numerals text on the WSUCon website
# Additionally, it stages the changed files for a git commit
for file in $(ls *.html) 
    do
    echo "Processing " $file
    sed -i.bak -e s/'XVI'/'XVII'/g $file
    git add $file
done;
rm *.html.bak
echo "You should run git commit now :)"
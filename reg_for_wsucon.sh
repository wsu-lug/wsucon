#!/bin/bash
# AUTHOR Charlie Hanacek
# DESC This script updates the "Registration is ..." text on the WSUCon website from closed to open.
# Additionally, it stages the changed files for a git commit
for file in $(ls *.html) 
    do
    echo "Processing " $file
    sed -i.bak -e s/'Registration is'/'Registration for WSUCon XVII is'/g $file
    git add $file
done;
rm *.html.bak
echo "You should run git commit now :)"

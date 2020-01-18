#!/bin/bash

docker build -t site .
docker run -it -p 8080:80 site


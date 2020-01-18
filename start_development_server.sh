#!/bin/bash

docker run -ti -v $(realpath .):/website -p 4000:4000 wsuconsite:latest bundle exec jekyll serve --host 0.0.0.0 --watch --incremental

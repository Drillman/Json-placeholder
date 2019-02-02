#!/usr/bin/env bash

docker run --rm -itu node -w /home/node -v "$(pwd)":/home/node node bash

exit 0
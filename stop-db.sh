#!/bin/bash
ps -ef | awk '/mongo/ && !/awk/ {print $2}' | xargs kill -9
ps aux | grep mongo

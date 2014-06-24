#!/bin/bash
mongod --config data/mongodb.conf &> /dev/null &
ps aux | grep mongo
echo "Running mongo db"

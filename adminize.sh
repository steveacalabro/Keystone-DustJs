#!/bin/bash
cd node_modules/keystone

echo '@import "admin.less";' >> 'public/styles/keystone.less'
wait

echo '@import "login.less";' >> 'public/styles/auth.less'
wait

echo "Adminzied"

cd ../../
grunt less

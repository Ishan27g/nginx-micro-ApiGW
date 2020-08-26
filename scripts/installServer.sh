#!/bin/bash
DIR="node_modules/"

cd ../register 
if [ -d "$DIR" ]; then
  echo "Removing node modules..."
  rm -rf node_modules 
fi
npm i && echo "Installed register API"

cd ../sync 
if [ -d "$DIR" ]; then
  echo "Removing node modules..."
  rm -rf node_modules 
fi
npm i && echo "Installed sync API"

cd ../write 
if [ -d "$DIR" ]; then
  echo "Removing node modules..."
  rm -rf node_modules 
fi
npm i && echo "Installed write API"
